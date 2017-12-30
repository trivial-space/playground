import * as runtime from 'tvs-flow/dist/lib/runtime'
import * as tvsTools from 'tvs-flow-tools'

export const flow = runtime.create()

export const tools = tvsTools.ui.start('graph-sort')

window['flow'] = flow
window['tools'] = tools
