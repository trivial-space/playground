import { planeForm } from './geometries'
import frag from './glsl/base.frag'
import vert from './glsl/base.vert'
import { initPerspectiveViewport } from '../shared-utils/vr/perspectiveViewport'
import { Q } from './context'

initPerspectiveViewport(Q)

// ===== shaders =====

export const baseShade = Q.getShade('base').update({ vert, frag })

// ===== objects =====

const sketch = Q.getSketch('quad').update({
	form: planeForm,
	shade: baseShade,
	uniforms: { transform: () => Q.state.entities.quad.transform },
})

// ===== layers =====

const scene = Q.getLayer('scene').update({
	sketches: [sketch],
	uniforms: {
		view: () => Q.state.viewPort.camera.viewMat,
		projection: () => Q.state.viewPort.camera.projectionMat,
	},
	drawSettings: {
		clearBits: Q.gl.DEPTH_BUFFER_BIT | Q.gl.COLOR_BUFFER_BIT,
	},
})

export const main = Q.getFrame('main').update({
	layers: scene,
})
