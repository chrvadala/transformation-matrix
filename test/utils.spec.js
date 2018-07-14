/* global describe, it, expect */
import {isUndefined} from '../src/utils'

describe('utils', () => {
  describe('isUndefined', () => {
    it('should be undefined', () => {
      expect(isUndefined(undefined)).toBe(true)

      expect(isUndefined(200)).toBe(false)
      expect(isUndefined(Number(200))).toBe(false)
      expect(isUndefined(null)).toBe(false)
    })
  })
})
