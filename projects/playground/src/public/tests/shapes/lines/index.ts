import { getPainterContext } from '../../../../shared-utils/painterState'
import { times } from 'tvs-libs/dist/utils/sequence'
import { makeClear } from 'tvs-painter/dist/utils/context'
import { createLines2DSketch } from '../../../../shared-utils/sketches/lines'
import { addToLoop, startLoop } from '../../../../shared-utils/frameLoop'
import { defined } from 'tvs-libs/dist/types'

export const canvas = document.getElementById('canvas') as HTMLCanvasElement

export const Q = getPainterContext(canvas)

const pointCount = 7

const linesDynamic = createLines2DSketch(Q, 'lines1', {
	lineWidth: 10,
	dynamicForm: true,
	withPoints: true,
})

const linesStatic1 = createLines2DSketch(Q, 'lines2', {
	lineWidth: 15,
	segments: times(
		() => [
			[
				(Math.random() * 0.5 + 0.3) * Q.gl.drawingBufferWidth,
				(Math.random() * 0.5 + 0.3) * Q.gl.drawingBufferHeight,
			],
			[
				(Math.random() * 0.5 + 0.3) * Q.gl.drawingBufferWidth,
				(Math.random() * 0.5 + 0.3) * Q.gl.drawingBufferHeight,
			],
		],
		10,
	),
	colors: times(() => [Math.random(), Math.random(), Math.random(), 1], 10),
	withPoints: true,
})

const linesStatic2 = createLines2DSketch(Q, 'lines3', {
	lineWidth: 30,
	segments: times(
		() => [
			[
				Math.random() * Q.gl.drawingBufferWidth,
				Math.random() * Q.gl.drawingBufferHeight,
			],
			[
				Math.random() * Q.gl.drawingBufferWidth,
				Math.random() * Q.gl.drawingBufferHeight,
			],
		],
		3,
	),
	color: [1, 1, 0, 1],
})

const layer = Q.getLayer('lines').update({
	drawSettings: {
		clearColor: [0, 0, 0, 1],
		clearBits: makeClear(Q.gl, 'color'),
		cullFace: Q.gl.BACK,
		enable: [Q.gl.CULL_FACE],
	},
	sketches: [
		linesDynamic.pointsSketch,
		linesDynamic.sketch,
		linesStatic1.pointsSketch,
		linesStatic1.sketch,
		linesStatic2.sketch,
	].filter(defined),
})

const scene = Q.getFrame('lines').update({ layers: [layer] })

addToLoop(() => {
	linesDynamic.update({
		points: times(
			() => [
				Math.random() * Q.gl.drawingBufferWidth,
				Math.random() * Q.gl.drawingBufferHeight,
			],
			pointCount,
		),
		colors: times(
			() => [Math.random(), Math.random(), Math.random(), 1],
			pointCount,
		),
	})

	Q.painter.compose(scene).display(scene)
}, 'loop')

startLoop()

import.meta.hot?.accept()
