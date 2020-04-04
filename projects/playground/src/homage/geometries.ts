import box from 'geo-3d-box'
import { getForm } from 'shared-utils/painterState'
import { plane } from 'tvs-painter/dist/utils/geometry/plane'
import { convertStackGLGeometry } from 'tvs-painter/dist/utils/stackgl'
import { painter } from './context'

export const planeSize = {
	width: 10,
	height: 10,
}

export const planeForm = getForm(painter, 'plane').update(
	plane(planeSize.width, planeSize.height, 5, 5),
)

const size = [10, 14, 2]
const segments = [5, 7, 1]

export const boxForm = getForm(painter, 'box').update(
	convertStackGLGeometry(box({ size, segments })),
)