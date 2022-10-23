import { compose, translate, scale, toCSS, fromOneMovingPoint, fromTwoMovingPoints } from 'transformation-matrix'

document.addEventListener('DOMContentLoaded', startup)

function startup () {
  const initialMatrix = compose([
    translate(40, 150),
    scale(0.5, 0.5, 0, 0)
  ])

  let curState = {
    startingPoints: [],
    matrix: initialMatrix
  }

  const el = document.getElementById('draggable-item')
  el.addEventListener('touchstart', onTouchEvent)
  el.addEventListener('touchmove', onTouchEvent)
  el.addEventListener('touchend', onTouchEvent)
  el.addEventListener('touchcancel', onTouchEvent)
  el.addEventListener('wheel', e => e.preventDefault(), { passive: false }) // prevent zoom
  el.oncontextmenu = function () { return false } // prevents android context menu

  setState(curState) // init
  console.log('ready')

  // Set next state and syncs objects
  function setState (nextState) {
    curState = nextState
    el.style.transformOrigin = '0 0'
    el.style.transform = toCSS(nextState.matrix)
  }

  // handle gestures
  function onTouchEvent (evt) {
    const coords = []
    for (const touch of evt.touches) {
      coords.push({ x: touch.clientX, y: touch.clientY })
    }
    console.log(evt.type, JSON.stringify(coords))

    switch (evt.type) {
      // onTouchStart, onTouchEnd
      case 'touchstart':
      case 'touchend':
        setState({
          startingPoints: coords.length <= 2 ? coords : [],
          matrix: curState.matrix
        })
        break

      // onTouchMove
      case 'touchmove': {
        if (coords.length < 1 || coords.length > 2) return

        const additionalMatrix = coords.length === 1
          ? fromOneMovingPoint(curState.startingPoints[0], coords[0])
          : fromTwoMovingPoints(curState.startingPoints[0], curState.startingPoints[1], coords[0], coords[1])

        const nextMatrix = compose(
          additionalMatrix,
          curState.matrix
        )

        setState({
          startingPoints: coords,
          matrix: nextMatrix
        })
        break
      }

      // onTouchCancel
      case 'touchcancel':
        setState({
          startingPoints: [],
          matrix: initialMatrix
        })
        break

      // default
      default:
        throw new Error('Unhandled event')
    }
  }
}
