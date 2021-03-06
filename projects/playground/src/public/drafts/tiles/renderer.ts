import { each } from 'tvs-libs/dist/utils/sequence'
import { Frame } from 'tvs-painter/dist/frame'
import { plane } from 'tvs-painter/dist/utils/geometry/plane'
import { events, Q } from './context'
import frag from './glsl/base-frag.glsl'
import vert from './glsl/base-vert.glsl'

// ===== Settings =====

Q.painter.updateDrawSettings({
	clearColor: [1, 1, 1, 1],
	enable: [Q.gl.DEPTH_TEST, Q.gl.CULL_FACE],
})

// ===== shaders =====

const shade = Q.getShade('shade').update({ frag, vert })

// ===== geometries =====

const tileSize = Q.state.tiles.tileSize
const form = Q.getForm('form').update(plane(tileSize, tileSize, 3, 3))

// ===== textures =====

const textures: { [id: string]: Frame } = {}

// ===== objects =====

export const tiles = Q.getSketch('tiles')

Q.listen('render', events.ON_IMAGES_LOADED, (s) => {
	each((img, key) => {
		textures[key] = Q.getFrame(key).update({
			texture: {
				minFilter: 'LINEAR_MIPMAP_LINEAR',
				magFilter: 'LINEAR',
				asset: img,
			},
		})
	}, s.tiles.images)
})

Q.listen('render', events.NEW_ACTIVE_TILES, (s) => {
	tiles.update({
		form,
		shade,
		uniforms: s.tiles.activeTiles.map((tile) => ({
			view: () => s.viewPort.camera.viewMat,
			projection: () => s.viewPort.camera.projectionMat,
			transform: tile.transform,
			image: textures[tile.tileSpecId] && textures[tile.tileSpecId].image(),
			color: tile.color,
			connections: tile.connections,
		})),
	})
})
