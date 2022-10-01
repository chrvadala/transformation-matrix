/* global describe, test, expect */
import { fromTwoMovingPoints } from '../src/fromTwoMovingPoints'
import { scale, translate, compose, rotateDEG } from '../src/index'

const O = { x: 0, y: 0 } // ORIGIN
const T = { x: 0, y: -100 } // TOP
const R = { x: 100, y: 0 } // RIGHT
const B = { x: 0, y: 100 } // BOTTOM
const L = { x: -100, y: 0 } // LEFT

const Tx2 = { x: 0, y: -200 } // TOP (x2)
const Rx2 = { x: 200, y: 0 } // RIGHT (x2)
const Bx2 = { x: 0, y: 200 } // BOTTOM (x2)
const Lx2 = { x: -200, y: 0 } // LEFT (x2)

const TR = pointAtDistance(O, 100, 45) // TOP-RIGHT
const BR = pointAtDistance(O, 100, 90 + 45) // BOTTOM-RIGHT
const BL = pointAtDistance(O, 100, 180 + 45) // BOTTOM-LEFT
const TL = pointAtDistance(O, 100, 270 + 45) // TOP-LEFT

describe('fromTwoMovingPoints', () => {
  test.each([
    ['scale O->T ', O, T, O, T, scale(1)],
    ['scale O->Tx2 ', O, T, O, Tx2, scale(2)],
    ['scale O->Rx2 ', O, R, O, Rx2, scale(2)],
    ['scale O->Bx2 ', O, B, O, Bx2, scale(2)],
    ['scale O->Lx2 ', O, L, O, Lx2, scale(2)],

    ['rotate 0 O->T', O, T, O, T, rotateDEG(0, 0, 0)],
    ['rotate 90 O->R', O, T, O, R, rotateDEG(90)],
    ['rotate 180 O->B', O, T, O, B, rotateDEG(180)],
    ['rotate 270 O->L', O, T, O, L, rotateDEG(270)],

    ['translate', O, R, { x: 100, y: 0 }, { x: 200, y: 0 }, translate(100, 0)],
    ['translate', O, B, { x: 0, y: 100 }, { x: 0, y: 200 }, translate(0, 100)],

    ['rotate 45 O->TR', O, T, O, TR, rotateDEG(45)],
    ['rotate 90+45 O->BR', O, T, O, BR, rotateDEG(90 + 45)],
    ['rotate 180+45 O->BL', O, T, O, BL, rotateDEG(180 + 45)],
    ['rotate 270+45 O->TL', O, T, O, TL, rotateDEG(270 + 45)],

    [
      'translate+scale',
      { x: 50, y: -100 },
      pointAtDistance({ x: 50, y: -100 }, 100, 0),
      { x: 50, y: -600 },
      pointAtDistance({ x: 50, y: -600 }, 200, 0),
      compose([
        translate(0, -500),
        scale(2, 2, 50, -600)
      ])
    ],

    [
      'translate+rotate',
      { x: 50, y: -100 },
      pointAtDistance({ x: 50, y: -100 }, 100, 0),
      { x: 50, y: -600 },
      pointAtDistance({ x: 50, y: -600 }, 100, 45),
      compose([
        translate(0, -500),
        rotateDEG(45, 50, -600)
      ])
    ],

    [
      'TR quadrant / translate+rotate+scale',
      { x: 50, y: -100 },
      pointAtDistance({ x: 50, y: -100 }, 100, 20),
      { x: 250, y: -600 },
      pointAtDistance({ x: 250, y: -600 }, 300, 45),
      compose([
        translate(200, -500),
        rotateDEG(25, 250, -600),
        scale(3, 3, 250, -600)
      ])
    ],
    [
      'BL quadrant / translate+rotate+scale',
      { x: 50, y: -100 },
      pointAtDistance({ x: 50, y: -100 }, 100, 0),
      { x: 250, y: -600 },
      pointAtDistance({ x: 250, y: -600 }, 300, -135),
      compose([
        translate(200, -500),
        rotateDEG(-135, 250, -600),
        scale(3, 3, 250, -600)
      ])
    ]
  ])('[%#]: %s', (desc, startingPoint1, startingPoint2, endingPoint1, endingPoint2, result) => {
    const res = fromTwoMovingPoints(startingPoint1, startingPoint2, endingPoint1, endingPoint2)
    const precision = 10
    expect(res).toEqual({
      a: expect.closeTo(result.a, precision),
      b: expect.closeTo(result.b, precision),
      c: expect.closeTo(result.c, precision),
      d: expect.closeTo(result.d, precision),
      e: expect.closeTo(result.e, precision),
      f: expect.closeTo(result.f, precision)
    })
  })
})

function pointAtDistance ({ x, y }, dist, angleDEG) {
  const angleRad = (angleDEG - 90) / 180 * Math.PI
  return {
    x: x + dist * Math.cos(angleRad),
    y: y + dist * Math.sin(angleRad)
  }
}
