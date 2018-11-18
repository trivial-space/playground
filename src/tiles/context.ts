import { baseEvents, getPainter, getState } from 'shared-utils/painterState'
import { BaseState } from 'shared-utils/painterState'
import { Tiles } from './state/tiles'
import { ViewPort } from './viewport'

export interface State extends BaseState {
	viewPort: ViewPort
	tiles: Tiles
}

export const canvas = document.getElementById('canvas') as HTMLCanvasElement

export const painter = getPainter(canvas)

export const gl = painter.gl

export const state = getState<State>()

export const events = {
	...baseEvents,
	INIT: 'init',
	START: 'start',
	NEW_ACTIVE_TILES: 'new_active_tiles'
}