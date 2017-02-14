import {
  identity,
  transform,
  applyToPoint,
  applyToPoints,
  translate,
  scale,
  rotate
} from '../src/2d-transformation';
import chai from 'chai';

const assert = chai.assert;

describe('2d-transformation', () => {

  describe('identity', () => {
    it('should return identity matrix', () => {
      let m = identity();
      assert.typeOf(m, 'object');
      assert.deepEqual(m, {
        a: 1, c: 0, e: 0,
        b: 0, d: 1, f: 0
      });
    })
  });

  describe('transform', () => {
    const m1 = {
      a: 1, c: 0, e: 40,
      b: 0, d: 1, f: 40
    };
    const m2 = {
      a: 2, c: 0, e: 0,
      b: 0, d: 2, f: 0
    };
    const m3 = {
      a: 1, c: 0, e: -40,
      b: 0, d: 1, f: -40
    };

    const m12 = {
      a: 2, c: 0, e: 40,
      b: 0, d: 2, f: 40
    };
    const m123 = {
      a: 2, c: 0, e: -40,
      b: 0, d: 2, f: -40
    };

    it('should throw exception', () => {
      assert.throws(() => {
        transform()
      }, 'no matrices provided')
    });

    it('should return m1', () => {
      assert.deepEqual(transform(m1), m1)
    });

    it('should return m1 * m2 = m12 ', () => {
      assert.deepEqual(transform(m1, m2), m12)
    });

    it('should return m1 * m2 * m3 = m123', () => {
      let m1 = {
        a: 1, c: 0, e: 40,
        b: 0, d: 1, f: 40
      };
      let m2 = {
        a: 2, c: 0, e: 0,
        b: 0, d: 2, f: 0
      };
      let m3 = {
        a: 1, c: 0, e: -40,
        b: 0, d: 1, f: -40
      };
      assert.deepEqual(transform(m1, m2, m3), m123)
    });
  });

  describe('translate', () => {
    it('should return a transform matrix', () => {
      let m = translate(40, 60);
      assert.deepEqual(m, {
        a: 1, c: 0, e: 40,
        b: 0, d: 1, f: 60
      });
      assert.deepEqual(applyToPoint({x: 0, y: 0}, m), {x: 40, y: 60});
      assert.deepEqual(applyToPoint({x: 50, y: 80}, m), {x: 90, y: 140});
    })
  });

  describe('scale', () => {
    it('should return a scale matrix', () => {
      let m = scale(20, 40);
      assert.deepEqual(m, {
        a: 20, c: 0, e: 0,
        b: 0, d: 40, f: 0
      });
      assert.deepEqual(applyToPoint({x: 0, y: 0}, m), {x: 0, y: 0});
      assert.deepEqual(applyToPoint({x: 50, y: 80}, m), {x: 1000, y: 3200});
    })
  });

  describe('rotate', () => {
    it('should return a rotation matrix', () => {
      const alfa = Math.PI / 2;
      const precision = 0.00001;
      let m = rotate(alfa);
      let point = applyToPoint({x: 50, y: 80}, m);
      assert.approximately(point.x, -80, precision);
      assert.approximately(point.y, 50, precision);
    })
  });

  describe('applyToPoint', () => {
    const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
      a: 2, c: 0, e: -40,
      b: 0, d: 2, f: -40
    };
    it('should return a transformed point', () => {
      assert.deepEqual(applyToPoint({x: 0, y: 0}, identity()), {x: 0, y: 0});
      assert.deepEqual(applyToPoint({x: 30, y: 30}, m1), {x: 20, y: 20});
      assert.deepEqual(applyToPoint({x: 50, y: 50}, m1), {x: 60, y: 60});
    })
  });

  describe('applyToPoints', () => {
    const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
      a: 2, c: 0, e: -40,
      b: 0, d: 2, f: -40
    };
    const points = [{x: 30, y: 30}, {x: 50, y: 50}];
    const transPoints = [{x: 20, y: 20}, {x: 60, y: 60}];
    it('should return transformed points', () => {
      assert.deepEqual(applyToPoints([{x: 0, y: 0}], identity()), [{x: 0, y: 0}]);
      assert.deepEqual(applyToPoints(points, m1), transPoints);
    })
  });

});

