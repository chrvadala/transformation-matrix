import {fromTransformAttribute} from '../src/fromTransformAttribute';
import {assert} from 'chai'
import {translate} from "../src/translate";
import {rotate} from "../src/rotate";

describe('fromTransformAttribute', () => {
  describe('test raw parser', () => {
    describe('original nidu/svg-transform-parser tests', () => {
      it('should parse single matrices', () => {

        assert.deepEqual(
          fromTransformAttribute("translate(1.6,65.44)", false).descriptors,
          [{t: 'translate', tx: 1.6, ty: 65.44}]
        )

        assert.deepEqual(
          fromTransformAttribute("translate(777)", false).descriptors,
          [{t: 'translate', tx: 777}]
        )

        assert.deepEqual(
          fromTransformAttribute("rotate(51)", false).descriptors,
          [{t: 'rotate', angle: 51}]
        )

        assert.deepEqual(
          fromTransformAttribute("rotate(46 51, 18.57)", false).descriptors,
          [{t: 'rotate', angle: 46, cx: 51, cy: 18.57}]
        )

        assert.deepEqual(
          fromTransformAttribute("skewX(19.08)", false).descriptors,
          [{t: 'skewX', angle: 19.08}]
        )

        assert.deepEqual(
          fromTransformAttribute("skewY(56.11)", false).descriptors,
          [{t: 'skewY', angle: 56.11}]
        )

        assert.deepEqual(
          fromTransformAttribute("matrix(1 2 3,4,5 6)", false).descriptors,
          [{t: 'matrix', a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}])
      });

      it('should throw exception', () => {
        assert.throws(fromTransformAttribute.bind(this, "rotate(46 51)", false))
        assert.throws(fromTransformAttribute.bind(this, "skewX(19.08, 4)", false))
        assert.throws(fromTransformAttribute.bind(this, "matrix(1 2 3,45 6)", false))
      })

      it('should parse complex matrices', () => {
        assert.deepEqual(
          fromTransformAttribute("translate(1,2) translate(3,4) translate(5,6)", false).descriptors,
          [
            {t: "translate", tx: 1, ty: 2},
            {t: "translate", tx: 3, ty: 4},
            {t: "translate", tx: 5, ty: 6},
          ]
        )

        assert.deepEqual(
          fromTransformAttribute("translate(1,-1),rotate(2 0.2 0.5) skewX(3.3)  skewY(4),matrix(6,5,4,3,2,1)", false).descriptors,
          [
            {t: "translate", tx: 1, ty: -1},
            {t: "rotate", angle: 2, cx: 0.2, cy: 0.5},
            {t: "skewX", angle: 3.3},
            {t: "skewY", angle: 4},
            {t: "matrix", a: 6, b: 5, c: 4, d: 3, e: 2, f: 1}
          ]
        )
      })
    })
  })


  describe('test parser & conversion to matrices', () => {

    it('should parse translate', () => {
      assert.deepEqual(
        fromTransformAttribute('translate(1.1, 2.2)'),
        {
          descriptors: [{t: 'translate', tx: 1.1, ty: 2.2}],
          matrices: [translate(1.1, 2.2)]
        }
      )

      assert.deepEqual(
        fromTransformAttribute('translate(1.1)'),
        {
          descriptors: [{t: 'translate', tx: 1.1}],
          matrices: [translate(1.1, 1.1)]
        }
      )
    })

    it('should parse rotate', () => {
      assert.deepEqual(
        fromTransformAttribute('rotate(1.1)'),
        {
          descriptors: [{t: 'rotate', angle: 1.1}],
          matrices: [rotate(1.1)]
        }
      )
    })

    it('should parse matrix', () => {
      assert.deepEqual(
        fromTransformAttribute('matrix(1.1,2.2,3.3,4.4,5.5,6.6)'),
        {
          descriptors: [{t: 'matrix', a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}],
          matrices: [{a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}]
        }
      )
    })
  })
});
