import {assert} from 'chai'
import {isUndefined} from "../src/utils";

describe('utils', () => {
  describe('isUndefined', () => {
    it('should be undefined', () => {
      assert.isTrue(isUndefined(undefined))

      assert.isFalse(isUndefined(200))
      assert.isFalse(isUndefined(Number(200)))
      assert.isFalse(isUndefined(null))
    })
  })
})

