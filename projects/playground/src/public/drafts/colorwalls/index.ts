import { addToLoop, startLoop } from '../../../shared-utils/frameLoop'
import { events, Q } from './context'
import { scene } from './renderer'

addToLoop((tpf) => {
	Q.get('device').tpf = tpf
	Q.emit(events.FRAME)
	Q.painter.compose(scene).display(scene)
}, 'loop')

startLoop()

import.meta.hot?.accept()
