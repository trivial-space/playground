import './state/tiles'
import './viewport'

import { repeat } from '../../../shared-utils/scheduler'
import { events, Q } from './context'
import { tiles } from './renderer'

// state.device.sizeMultiplier = window.devicePixelRatio

Q.listen('start', events.ON_IMAGES_LOADED, (s) => {
	repeat((tpf) => {
		s.device.tpf = tpf
		Q.emit(events.FRAME)
		Q.painter.draw(tiles)
	}, 'loop')
})

Q.emit(events.INIT)

import.meta.hot?.accept()
