/* global describe, it, expect */
import { fromTransformAttribute } from '../src/fromTransformAttribute'

describe('fromTransformAttribute', () => {
  describe('atomic transformations', () => {
    it('should parse matrix(<a> <b> <c> <d> <e> <f>)', () => {
      expect(fromTransformAttribute('matrix(1.1,2.2,3.3,4.4,5.5,6.6)')).toEqual([
        { type: 'matrix', a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6 }
      ])
    })

    it('should parse translate(<tx>)', () => {
      expect(fromTransformAttribute('translate(1.1)')).toEqual([
        { type: 'translate', tx: 1.1 }
      ])
    })

    it('should parse translate(<tx> <ty>]', () => {
      expect(fromTransformAttribute('translate(1.1, 2.2)')).toEqual([
        { type: 'translate', tx: 1.1, ty: 2.2 }
      ])
    })

    it('should parse scale(<sx>)', () => {
      expect(fromTransformAttribute('scale(1.1)')).toEqual([
        { type: 'scale', sx: 1.1 }
      ])
    })

    it('should parse scale(<sx> <sy>)', () => {
      expect(fromTransformAttribute('scale(1.1, 2.2)')).toEqual([
        { type: 'scale', sx: 1.1, sy: 2.2 }
      ])
    })

    it('should parse rotate(<rotate-angle>)', () => {
      expect(fromTransformAttribute('rotate(45)')).toEqual([
        { type: 'rotate', angle: 45 }
      ])
    })

    it('should parse rotate(<rotate-angle> <cx> <cy>)', () => {
      expect(fromTransformAttribute('rotate(45, 100, 200)')).toEqual([
        { type: 'rotate', angle: 45, cx: 100, cy: 200 }
      ])
    })

    it('should parse skewX(<skew-angle>)', () => {
      expect(fromTransformAttribute('skewX(45)')).toEqual([
        { type: 'skewX', angle: 45 }
      ])
    })

    it('should parse skewY(<skew-angle>)', () => {
      expect(fromTransformAttribute('skewY(45)')).toEqual([
        { type: 'skewY', angle: 45 }
      ])
    })

    it('should throw exception', () => {
      expect(() => {
        fromTransformAttribute('M_A_T_R_I_X(1,2,3,4,5,6)')
      }).toThrow()
    })
  })

  describe('complex transformations', () => {
    it('should parse in the right order', () => {
      expect(fromTransformAttribute('translate(1,2) translate(3,4) translate(5,6)')).toEqual([
        { type: 'translate', tx: 1, ty: 2 },
        { type: 'translate', tx: 3, ty: 4 },
        { type: 'translate', tx: 5, ty: 6 }
      ])
    })

    it('should parse multiple matrices', () => {
      expect(
        fromTransformAttribute('translate(1,-1) matrix(6,5,4,3,2,1), translate(1,-1) translate(1,-1), translate(1,-1)')
      ).toEqual([
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'matrix', a: 6, b: 5, c: 4, d: 3, e: 2, f: 1 },
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'translate', tx: 1, ty: -1 },
        { type: 'translate', tx: 1, ty: -1 }
      ])
    })
  })
})
