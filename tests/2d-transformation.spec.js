import {
  identity,
  transform,
  applyToPoint,
  applyToPoints,
  translate,
  scale,
  rotate,
  rotateDEG,
  inverse,
  fromString,
  isAffineMatrix,
  fromObject
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
      }, 'no matrices provided');
      assert.throws(() => {
        transform([])
      }, 'no matrices provided')
    });

    it('should return m1', () => {
      assert.deepEqual(transform(m1), m1);
      assert.deepEqual(transform([m1]), m1);
    });

    it('should return m1 * m2 = m12 ', () => {
      assert.deepEqual(transform(m1, m2), m12);
      assert.deepEqual(transform([m1, m2]), m12);
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
      assert.deepEqual(transform(m1, m2, m3), m123);
      assert.deepEqual(transform([m1, m2, m3]), m123)
    });
  });

  describe('translate', () => {
    it('should return a transform matrix', () => {
      let m = translate(40, 60);
      assert.deepEqual(m, {
        a: 1, c: 0, e: 40,
        b: 0, d: 1, f: 60
      });
      assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 40, y: 60});
      assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 90, y: 140});
    })
  });

  describe('inverse', () => {
    it('should return inverse matrix', () => {
      // http://www.wolframalpha.com/input/?i=Inverse+%5B%7B%7B1,2,3%7D,%7B4,5,6%7D,%7B0,0,1%7D%7D%5D
      const m = {
        a: 1, c: 2, e: 3,
        b: 4, d: 5, f: 6
      };
      const inv = {
        a: -5 / 3, c: 2 / 3, e: 1,
        b: 4 / 3, d: -1 / 3, f: -2
      };
      assert.deepEqual(inverse(m), inv)
    });
    it('should return original points', () => {
      const m1 = { //trans(40,40) scale(2,2) trans(-40,-40)
        a: 2, c: 0, e: -40,
        b: 0, d: 2, f: -40
      };
      const points = [{x: 30, y: 30}, {x: 50, y: 50}];
      const transPoints = [{x: 20, y: 20}, {x: 60, y: 60}];

      assert.deepEqual(applyToPoints(inverse(m1), transPoints), points);
    })
  });

  describe('scale', () => {
    it('should return a scale matrix', () => {
      let m = scale(20, 40);
      assert.deepEqual(m, {
        a: 20, c: 0, e: 0,
        b: 0, d: 40, f: 0
      });
      assert.deepEqual(applyToPoint(m, {x: 0, y: 0}), {x: 0, y: 0});
      assert.deepEqual(applyToPoint(m, {x: 50, y: 80}), {x: 1000, y: 3200});
    })
  });

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

  describe('rotate', () => {
    it('should return a rotation matrix', () => {
      const alfa = 90;
      const precision = 0.00001;
      let m = rotateDEG(alfa);
      let point = applyToPoint(m, {x: 50, y: 80});
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
      assert.deepEqual(applyToPoint(identity(), {x: 0, y: 0}), {x: 0, y: 0});
      assert.deepEqual(applyToPoint(m1, {x: 30, y: 30}), {x: 20, y: 20});
      assert.deepEqual(applyToPoint(m1, {x: 50, y: 50}), {x: 60, y: 60});
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
      assert.deepEqual(applyToPoints(identity(), [{x: 0, y: 0}]), [{x: 0, y: 0}]);
      assert.deepEqual(applyToPoints(m1, points), transPoints);
    })
  });

  describe('fromString', () => {
    it('should parse a matrix from string', () => {
      assert.deepEqual(
        fromString('matrix(1,2,3,4,5,6)'),
        {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'integer matrix');
      assert.deepEqual(
        fromString('matrix(1 ,    2 , 3 , 4 , 5 , 6 )'),
        {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'integer matrix with spaces');
      assert.deepEqual(
        fromString('MaTrIx(1,2,3,4,5,6)'),
        {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}, 'capital letter');
      assert.deepEqual(
        fromString('matrix(1.1,2.2,3.3,4.4,5.5,6.6)'),
        {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}, 'float matrix');
      assert.deepEqual(
        fromString('matrix(1.1 ,2.2  ,3.3 ,  4.4,  5.5,  6.6   )'),
        {a: 1.1, b: 2.2, c: 3.3, d: 4.4, e: 5.5, f: 6.6}, 'float matrix with spaces');
      assert.deepEqual(
        fromString('matrix(1,2.2  ,3.3,4.4,5,  6   )'),
        {a: 1, b: 2.2, c: 3.3, d: 4.4, e: 5, f: 6}, 'mixed matrix');
      assert.throws(fromString.bind(this, 'matrix()'), /is not a matrix$/);
      assert.throws(fromString.bind(this, 'matrix(1,2,3,4,5)'), /is not a matrix$/);
      assert.throws(fromString.bind(this, 'matrix(a,b,c,d,e,f)'), /is not a matrix$/);
    })
  });

  describe('isAffineMatrix', () => {
    it('should return true', () => {
      let o1 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0};
      let o2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100};
      let o3 = {y: 200, a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, x: 100};
      assert.isTrue(isAffineMatrix(o1));
      assert.isTrue(isAffineMatrix(o2));
      assert.isTrue(isAffineMatrix(o3));
    });
    it('should return false', () => {
      let o1 = {a: 0, b: 0, c: 0, d: 0, e: 0};
      let o2 = {a: 0, b: 0, c: 0, d: 0, e: 0, f: Number.NaN};
      let o3 = {a: 0, b: 0, c: 0, d: 0, e: Number.POSITIVE_INFINITY, f: 0};
      let o4 = {a: "0", b: 0, c: 0, d: 0, e: 0, f: 0};
      let o5 = "{a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}";
      let o6 = {};
      let o7 = 42;
      assert.isFalse(isAffineMatrix(o1));
      assert.isFalse(isAffineMatrix(o2));
      assert.isFalse(isAffineMatrix(o3));
      assert.isFalse(isAffineMatrix(o4));
      assert.isFalse(isAffineMatrix(o5));
      assert.isFalse(isAffineMatrix(o6));
      assert.isFalse(isAffineMatrix(o7));
    })
  });

  describe('fromObject', () => {
    it('should return an affine matrix', ()=> {
      let expected = {a: 1, b: 2, c: 3, d: 4, e: 5, f:6};
      let o1 = {a: 1, b: 2, c: 3, d: 4, e: 5, f:6};
      let o2 = {a: 1, b: 2, z: 500, c: 3, d: 4, e: 5, f:6, x: 100, y: 200};
      assert.deepEqual(fromObject(o1), expected);
      assert.deepEqual(fromObject(o2), expected);
    });
  })
});

