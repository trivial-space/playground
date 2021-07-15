import { getPainterContext } from '../../../../shared-utils/painterState'
import { times } from 'tvs-libs/dist/utils/sequence'
import { makeClear } from 'tvs-painter/dist/utils/context'
import { createLines2DSketch } from '../../../../shared-utils/sketches/lines'
import { addToLoop, startLoop } from '../../../../shared-utils/frameLoop'

export const canvas = document.getElementById('canvas') as HTMLCanvasElement

export const Q = getPainterContext(canvas)

const pointCount = 7

const linesDynamic = createLines2DSketch(Q, 'lines1', {
	lineWidth: 4,
	dynamicForm: true,
	drawSettings: {
		clearColor: [0, 0, 0, 1],
		clearBits: makeClear(Q.gl, 'color'),
		cullFace: Q.gl.BACK,
		enable: [Q.gl.CULL_FACE],
	},
})

const linesStatic = createLines2DSketch(Q, 'lines2', {
	lineWidth: 16,
	points: times(
		() => [
			Math.random() * Q.gl.drawingBufferWidth,
			Math.random() * Q.gl.drawingBufferHeight,
		],
		3,
	),
	color: [1, 1, 0, 1],
})

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

	Q.painter.draw(linesDynamic.sketch)
	Q.painter.draw(linesStatic.sketch)
}, 'loop')

startLoop()

import.meta.hot?.accept()
