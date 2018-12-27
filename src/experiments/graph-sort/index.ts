import { getDrawingLayer, getShade, getSketch } from 'shared-utils/painterState'
import { repeat, stop } from 'shared-utils/scheduler'
import { canvas, gl, painter } from './context'
import { lineForm, pointsForm, updateGeometries } from './geometries'
import { updateNodes } from './nodes'
import lineFrag from './shaders/line.frag'
import lineVert from './shaders/line.vert'
import pointFrag from './shaders/point.frag'
import pointVert from './shaders/point.vert'

// ===== shaders =====

const pointsShade = getShade(painter, 'point').update({
	vert: pointVert,
	frag: pointFrag,
})

const linesShade = getShade(painter, 'line').update({
	vert: lineVert,
	frag: lineFrag,
})

// ===== objects =====

export const pointsSketch = getSketch(painter, 'point').update({
	form: pointsForm,
	shade: pointsShade,
})

export const linesSketch = getSketch(painter, 'lines').update({
	form: lineForm,
	shade: linesShade,
})

// ===== layers =====

export const scene = getDrawingLayer(painter, 'scene').update({
	sketches: [linesSketch, pointsSketch],
	uniforms: { size: [canvas.width, canvas.height] },
	drawSettings: {
		clearColor: [0, 0, 0, 1],
		clearBits: gl.COLOR_BUFFER_BIT,
		cullFace: gl.BACK,
		enable: [gl.CULL_FACE],
	},
})

// ===== render =====

const timeToSort = 10
let time = 0
repeat(tpf => {
	time += tpf

	updateNodes(tpf)
	updateGeometries()

	painter.compose(scene)

	if (time >= timeToSort * 1000) stop('render')
}, 'render')
