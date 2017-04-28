import * as lib from '../src/index';
import {assert} from 'chai'

describe('index', () => {
  it('should export functions', () => {
    assert.typeOf(lib.toString, 'function')
    assert.typeOf(lib.toSVG, 'function')
    assert.typeOf(lib.toCSS, 'function')
    assert.typeOf(lib.identity, 'function')
    assert.typeOf(lib.transform, 'function')
    assert.typeOf(lib.applyToPoint, 'function')
    assert.typeOf(lib.applyToPoints, 'function')
    assert.typeOf(lib.translate, 'function')
    assert.typeOf(lib.scale, 'function')
    assert.typeOf(lib.shear, 'function')
    assert.typeOf(lib.rotate, 'function')
    assert.typeOf(lib.rotateDEG, 'function')
    assert.typeOf(lib.inverse, 'function')
    assert.typeOf(lib.fromString, 'function')
    assert.typeOf(lib.isAffineMatrix, 'function')
    assert.typeOf(lib.fromObject, 'function')
  })
});


