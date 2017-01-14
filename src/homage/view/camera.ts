import * as flow from '../flow'
import * as flowCamera from 'tvs-libs/lib/vr/flow-camera'
import ctx from './context'
import {Keys, KeyState} from 'tvs-libs/lib/events/keyboard'
import {mat4} from 'tvs-libs/lib/math/gl-matrix'
import {keys, tick, mouseDrag} from '../events'
import * as ground from '../state/ground'
// import {MouseState} from 'tvs-libs/lib/events/mouse'

const {val, asyncStream, addToFlow} = flow


const firstPersonView = flowCamera.makeFirstPersonView(flow)
export const {
  position, yaw, pitch, yawQuat, pitchQuat, rotationQuat, view
} = firstPersonView


const perspectiveView = flowCamera.makePerspective(flow, ctx.canvasSize)
export const {
  fovy, aspect, near, far, perspective
} = perspectiveView


fovy.val(Math.PI * 0.4)


export const moveSpeed = val(0.05)

export const lookSpeed = val(0.003)


export const moveForward = asyncStream(
  [keys.COLD, moveSpeed.COLD, tick.HOT],
  (send, keys: KeyState, speed: number) => {

    if (!keys) return
    if (keys[Keys.UP] || keys[Keys.W]) {
      send(speed)
    }
    if (keys[Keys.DOWN] || keys[Keys.S]) {
      send(-speed)
    }
  }
)


export const moveLeft = asyncStream(
  [keys.COLD, moveSpeed.COLD, tick.HOT],
  (send, keys: KeyState, speed: number) => {

    if (!keys) return
    if (keys[Keys.LEFT] || keys[Keys.A]) {
      send(speed)
    }
    if (keys[Keys.RIGHT] || keys[Keys.D]) {
      send(-speed)
    }
  }
)


yaw.react(
  [mouseDrag.HOT, lookSpeed.COLD],
  (rot, drag, speed) => rot + drag.x * speed
)


pitch.react(
  [mouseDrag.HOT, lookSpeed.COLD],
  (rot, drag, speed) => rot + drag.y * speed
)


export const groundMirrorView = val(mat4.create())
  .react(
    [view.HOT, ground.mirrorMatrix.HOT],
    mat4.multiply
  )



addToFlow({
  ...perspectiveView,
  ...firstPersonView,
  moveSpeed,
  lookSpeed,
  moveForward,
  moveLeft,
  groundMirrorView
}, 'view.camera')
