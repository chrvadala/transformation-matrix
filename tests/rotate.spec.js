import {applyToPoint} from '../src/applyToPoint';
import {rotate, rotateDEG} from '../src/rotate';
import {assert} from 'chai'

describe('rotate', () => {
  it('should return a rotation matrix', () => {
    const alfa = Math.PI / 2;
    const precision = 0.00001;
    let m = rotate(alfa);
    let point = applyToPoint(m, {x: 50, y: 80});
    assert.approximately(point.x, -80, precision);
    assert.approximately(point.y, 50, precision);
  })
});

describe('rotateDEG', () => {
  it('should return a rotation matrix', () => {
    const alfa = 90;
    const precision = 0.00001;
    let m = rotateDEG(alfa);
    let point = applyToPoint(m, {x: 50, y: 80});
    assert.approximately(point.x, -80, precision);
    assert.approximately(point.y, 50, precision);
  })
  it('should rotate a point about a specified center', () => {
    /*
    <g transform="rotate(90, 50, 20)">
      <rect x="0" y="0" width="100" height="40" fill="red" />
      <circle cx="100" cy="40" r="10" fill="yellow" />
    </g>
    <circle cx="30" cy="70" r="5" fill="black" />
   */
    let m = rotateDEG(90, 50, 20)
    let point = applyToPoint(m, {x: 100, y: 40}); //yellow
    const precision = 0.00001;
    assert.approximately(point.x, 30, precision);
    assert.approximately(point.y, 70, precision);
  })
});

