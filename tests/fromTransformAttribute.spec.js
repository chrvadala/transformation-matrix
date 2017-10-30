import {fromTransformAttribute} from '../src/fromTransformAttribute';
import {assert} from 'chai'
import {translate} from "../src/translate";
import {rotate} from "../src/rotate";

describe('fromTransformAttribute', () => {
  describe('atomic transformations', () => {
    it('should parse matrix(<a> <b> <c> <d> <e> <f>)', () => {
      assert.deepEqual(
        fromTransformAttribute('matrix(1.1,2.2,3.3,4.4,5.5,6.6)'),
        {
          descriptors: [{t: 'matrix', a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}],
          matrices: [{a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}]
        }
      )
    })

    it('should parse translate(<tx>)', () => {
      assert.deepEqual(
        fromTransformAttribute('translate(1.1)'),
        {
          descriptors: [{t: 'translate', tx: 1.1}],
          matrices: [translate(1.1, 0)]
        }
      )
    })

    it('should parse translate(<tx> <ty>]', () => {
      assert.deepEqual(
        fromTransformAttribute('translate(1.1, 2.2)'),
        {
          descriptors: [{t: 'translate', tx: 1.1, ty: 2.2}],
          matrices: [translate(1.1, 2.2)]
        }
      )
    })

    it.skip('should parse scale(<sx>)', () => {
      //TODO
    })

    it.skip('should parse scale(<sx> <sy>)', () => {
      //TODO
    })

    it('should parse rotate(<rotate-angle>)', () => {
      assert.deepEqual(
        fromTransformAttribute('rotate(1.1)'),
        {
          descriptors: [{t: 'rotate', angle: 1.1}],
          matrices: [rotate(1.1)]
        }
      )
    })

    it.skip('should parse rotate(<rotate-angle> <cx> <cy>)', () => {
      //TODO
    })

    it.skip('should parse skewX(<skew-angle>)', () => {
      //TODO
    })

    it.skip('should parse skewY(<skew-angle>)', () => {
      //TODO
    })
  })


  describe('complex transformations', () => {
    it('should parse in the right order', () => {
      assert.deepEqual(
        fromTransformAttribute("translate(1,2) translate(3,4) translate(5,6)"),
        {
          descriptors: [
            {t: "translate", tx: 1, ty: 2},
            {t: "translate", tx: 3, ty: 4},
            {t: "translate", tx: 5, ty: 6},
          ],
          matrices: [
            translate(1, 2),
            translate(3, 4),
            translate(5, 6),
          ]
        }
      )
    })

    it('should parse multiple matrices', () => {
      assert.deepEqual(
        fromTransformAttribute("translate(1,-1) matrix(6,5,4,3,2,1), translate(1,-1) translate(1,-1), translate(1,-1)"),
        {
          descriptors: [
            {t: "translate", tx: 1, ty: -1},
            {t: "matrix", a: 6, b: 5, c: 4, d: 3, e: 2, f: 1},
            {t: "translate", tx: 1, ty: -1},
            {t: "translate", tx: 1, ty: -1},
            {t: "translate", tx: 1, ty: -1},
          ],
          matrices: [
            translate(1, -1),
            {a: 6, b: 5, c: 4, d: 3, e: 2, f: 1},
            translate(1, -1),
            translate(1, -1),
            translate(1, -1),
          ]
        }
      )
    })
  })
});
