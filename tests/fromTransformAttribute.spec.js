import {fromTransformAttribute} from '../src/fromTransformAttribute';
import {assert} from 'chai'
import {translate} from "../src/translate";
import {rotate} from "../src/rotate";

describe('fromTransformAttribute', () => {

  describe('original nidu/svg-transform-parser tests', () => {
    it('should parse single matrices', () => {
      assert.deepEqual(fromTransformAttribute("translate(1.6,65.44)", false).descriptor, {
        translate: {
          tx: 1.6,
          ty: 65.44
        }
      })
      assert.deepEqual(fromTransformAttribute("translate(777)", false).descriptor, {translate: {tx: 777}})
      assert.deepEqual(fromTransformAttribute("rotate(51)", false).descriptor, {rotate: {angle: 51}})
      assert.deepEqual(fromTransformAttribute("rotate(46 51, 18.57)", false).descriptor, {
        rotate: {
          angle: 46,
          cx: 51,
          cy: 18.57
        }
      })
      assert.deepEqual(fromTransformAttribute("skewX(19.08)", false).descriptor, {skewX: {angle: 19.08}})
      assert.deepEqual(fromTransformAttribute("skewY(56.11)", false).descriptor, {skewY: {angle: 56.11}})
      assert.deepEqual(fromTransformAttribute("matrix(1 2 3,4,5 6)", false).descriptor, {
        matrix: {
          a: 1,
          b: 2,
          c: 3,
          d: 4,
          e: 5,
          f: 6
        }
      })
    });

    it('should throw exception', () => {
      assert.throws(fromTransformAttribute.bind(this, "rotate(46 51)", false))
      assert.throws(fromTransformAttribute.bind(this, "skewX(19.08, 4)", false))
      assert.throws(fromTransformAttribute.bind(this, "matrix(1 2 3,45 6)", false))
    })

    it('should parse complex matrices', () => {
      let expected = {
        translate: {tx: 1, ty: -1},
        rotate: {angle: 2, cx: 0.2, cy: 0.5},
        skewX: {angle: 3.3},
        skewY: {angle: 4},
        matrix: {a: 6, b: 5, c: 4, d: 3, e: 2, f: 1}
      }
      assert.deepEqual(fromTransformAttribute("translate(1,-1),rotate(2 0.2 0.5) skewX(3.3)  skewY(4),matrix(6,5,4,3,2,1)", false).descriptor, expected)
    })
  })

  it('should parse translate', () => {
    assert.deepEqual(
      fromTransformAttribute('translate(1.1, 2.2)'),
      {
        descriptor: {translate: {tx: 1.1, ty: 2.2}},
        matrix: translate(1.1, 2.2)
      }
    )

    assert.deepEqual(
      fromTransformAttribute('translate(1.1)'),
      {
        descriptor: {translate: {tx: 1.1}},
        matrix: translate(1.1, 1.1)
      }
    )
  })

  it('should parse rotate', () => {
    assert.deepEqual(
      fromTransformAttribute('rotate(1.1)'),
      {
        descriptor: {rotate: {angle: 1.1}},
        matrix: rotate(1.1)
      }
    )
  })

  it('should parse matrix', () => {
    assert.deepEqual(
      fromTransformAttribute('matrix(1.1,2.2,3.3,4.4,5.5,6.6)'),
      {
        descriptor: {matrix: {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}},
        matrix: {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}
      }
    )
  })
});
