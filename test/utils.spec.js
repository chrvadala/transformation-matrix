/* global describe, it, expect */
import { isNumeric, isObject, isUndefined, matchesShape } from '../src/utils'

describe('utils', () => {
  describe('isUndefined', () => {
    it('should return true', () => {
      expect(isUndefined(undefined)).toBe(true)
    })

    it('should return true', () => {
      expect(isUndefined(200)).toBe(false)
      expect(isUndefined(Number(200))).toBe(false)
      expect(isUndefined(null)).toBe(false)
    })
  })

  describe('isNumeric', () => {
    it('should return true', () => {
      expect(isNumeric(100)).toBe(true)
      expect(isNumeric(100.10)).toBe(true)
    })

    it('should return true', () => {
      expect(isNumeric('100')).toBe(false)
      expect(isNumeric('100.10')).toBe(false)
    })
  })

  describe('isObject', () => {
    it('should return true', () => {
      expect(isObject({})).toBe(true)
      expect(isObject({ a: 100 })).toBe(true)
    })

    it('should return false', () => {
      expect(isObject(100)).toBe(false)
      expect(isObject(false)).toBe(false)
      expect(isObject([])).toBe(false)
      expect(isObject(null)).toBe(false)
    })
  })

  describe('matchesShape', () => {
    it('should return true', () => {
      expect(matchesShape({}, [])).toBe(true)
      expect(matchesShape({ a: 100 }, ['a'])).toBe(true)
      expect(matchesShape({ a: 100 }, ['a'])).toBe(true)
    })

    it('should return false', () => {

    })
  })
})
