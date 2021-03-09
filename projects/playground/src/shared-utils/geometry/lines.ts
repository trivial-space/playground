import { Vec, mul, add, cross } from 'tvs-libs/dist/math/vectors'
import { quat, vec3 } from 'gl-matrix'
import {
	flatMap,
	flatten,
	reverse,
	repeat,
	concat,
	times,
} from 'tvs-libs/dist/utils/sequence'
import { partial, pipe } from 'tvs-libs/dist/fp/core'
import { FormData, FormStoreType } from 'tvs-painter'

export interface LineSegment {
	vertex: Vec
	normal: Vec
	direction: Vec
	length: number
}

export type Line = LineSegment[]

export interface LineStep {
	length: number
	normalAngle?: number
	directionAngle?: number
	tangentAngle?: number
}

export function lineSegment({
	vertex = [0, 0, 0],
	normal = [0, 0, 1],
	direction = [0, 1, 0],
	length = 1,
}: Partial<LineSegment> = {}): LineSegment {
	return { vertex, normal, direction, length }
}

const rotQuatNormal = quat.create()
const rotQuatDirection = quat.create()
const rotQuatTangent = quat.create()
const rotQuat = quat.create()

const vec3Temp = vec3.create()

export function walkLine3D(
	{ length, directionAngle = 0, normalAngle = 0, tangentAngle = 0 }: LineStep,
	segment = lineSegment(),
) {
	if (normalAngle) {
		quat.setAxisAngle(rotQuatNormal, segment.normal as vec3, normalAngle)
	} else {
		quat.identity(rotQuatNormal)
	}
	if (directionAngle) {
		quat.setAxisAngle(
			rotQuatDirection,
			segment.direction as vec3,
			directionAngle,
		)
	} else {
		quat.identity(rotQuatDirection)
	}
	if (tangentAngle) {
		quat.setAxisAngle(
			rotQuatTangent,
			vec3.cross(vec3Temp, segment.direction as vec3, segment.normal as vec3),
			tangentAngle,
		)
	} else {
		quat.identity(rotQuatTangent)
	}
	quat.multiply(
		rotQuat,
		quat.multiply(rotQuat, rotQuatDirection, rotQuatNormal),
		rotQuatTangent,
	)

	const newNormal = vec3.transformQuat(
		vec3.create(),
		segment.normal as vec3,
		rotQuat,
	)

	vec3.normalize(newNormal, newNormal)

	const newDirection = vec3.transformQuat(
		vec3.create(),
		segment.direction as vec3,
		rotQuat,
	)
	vec3.normalize(newDirection, newDirection)

	const newVertex = vec3.create()
	vec3.scale(newVertex, segment.direction as vec3, segment.length)
	vec3.add(newVertex, newVertex, segment.vertex as vec3)

	return lineSegment({
		vertex: newVertex,
		direction: newDirection,
		normal: newNormal,
		length: length,
	})
}

export function lineSegmentStartPoints(
	thickness: number | ((seg: LineSegment) => number) = 1,
	segment: LineSegment,
) {
	thickness = typeof thickness === 'number' ? thickness : thickness(segment)
	const tangent =
		segment.direction.length === 2
			? [segment.direction[1], -segment.direction[0]]
			: cross(segment.normal, segment.direction)
	const p1 = add(mul(-thickness, tangent), segment.vertex)
	const p2 = add(mul(thickness, tangent), segment.vertex)
	return [p1, p2]
}

export function lineSegmentEndPoints(
	thickness: number | ((seg: LineSegment) => number) = 1,
	segment: LineSegment,
) {
	lineSegmentStartPoints(thickness, {
		...segment,
		vertex: add(segment.vertex, mul(segment.length, segment.direction)),
	})
}

export function lineSegmentsJoinPoints(
	thickness: number | ((seg: LineSegment) => number) = 1,
	segmentBefore: LineSegment,
	segmentNext: LineSegment,
) {
	// TODO: implement 2 miter points, or 3 bevel points for sharp angles
	// for math see
	// https://mattdesl.svbtle.com/drawing-lines-is-hard
	// https://cesium.com/blog/2013/04/22/robust-polyline-rendering-with-webgl/ "Vertex Shader Details"
	// https://www.npmjs.com/package/polyline-normals
}

// === FormData helpers ===

interface opts {
	withBackFace?: boolean
	withNormals?: boolean
	withUVs?: boolean
	storeType?: FormStoreType
}
export function lineToTriangleStripGeometry(
	line: Line,
	lineWidth: number | ((seg: LineSegment) => number),
	{
		withBackFace = false,
		withNormals = false,
		withUVs = false,
		storeType,
	}: opts = {},
): FormData {
	const data: FormData = {
		attribs: {
			position: {
				buffer: new Float32Array(
					flatten(
						concat(
							flatMap(partial(lineSegmentStartPoints, lineWidth), line),
							withBackFace
								? flatMap(
										pipe(partial(lineSegmentStartPoints, lineWidth), reverse),
										line,
								  ).reverse()
								: [],
						),
					),
				),
				storeType,
			},
		},
		drawType: 'TRIANGLE_STRIP',
		itemCount: line.length * (withBackFace ? 4 : 2),
	}

	if (withNormals) {
		data.attribs.normal = {
			buffer: new Float32Array(
				flatten(
					concat(
						flatMap((s) => [s.normal, s.normal], line),
						withBackFace
							? flatMap((s) => repeat(2, mul(-1, s.normal)), line).reverse()
							: [],
					),
				),
			),
			storeType,
		}
	}

	if (withUVs) {
		data.attribs.uv = {
			buffer: new Float32Array(
				flatten(
					concat(
						flatten(
							times(
								(i) => [
									[0, i / line.length],
									[1, i / line.length],
								],
								line.length,
							),
						),
						withBackFace
							? flatten(
									times(
										(i) => [
											[1, i / line.length],
											[0, i / line.length],
										],
										line.length,
									),
							  ).reverse()
							: [],
					),
				),
			),
			storeType,
		}
	}

	return data
}
