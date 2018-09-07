declare module 'transformation-matrix' {
  type Matrix = {
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
  };

  type Point = { x: number; y: number };

  export { Point, Matrix };
}

declare module 'transformation-matrix/applyToPoint' {
  import { Point, Matrix } from 'transformation-matrix';

  /** Calculate a point transformed with an affine matrix */
  export function applyToPoint(matrix: Matrix, point: Point): Point;
  /** Calculate an array of points transformed with an affine matrix */
  export function applyToPoints(matrix: Matrix, points: Point[]): Point[];
}

declare module 'transformation-matrix/fromString' {
  import { Matrix } from 'transformation-matrix';

  /** Parse a string matrix formatted as `matrix(a,b,c,d,e,f)` */
  export function fromString(str: string): Matrix;
}

declare module 'transformation-matrix/fromObject' {
  import { Point, Matrix } from 'transformation-matrix';

  /**
   * Extract an affine matrix from an object that contains a,b,c,d,e,f keys.
   * Each value could be a float or a string that contains a float
   */
  export function fromObject(object: {
    a: string | number;
    b: string | number;
    c: string | number;
    d: string | number;
    e: string | number;
    f: string | number;
  }): Matrix;
}

declare module 'transformation-matrix/identity' {
  import { Matrix } from 'transformation-matrix';

  /** Identity matrix */
  export function identity(): Matrix;
}

declare module 'transformation-matrix/inverse' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a matrix that is the inverse of the provided matrix */
  export function inverse(matrix: Matrix): Matrix;
}

declare module 'transformation-matrix/isAffineMatrix' {
  import { Matrix } from 'transformation-matrix';

  /** Check if the object contain an affine matrix */
  export function isAffineMatrix(obj: object): boolean;
}

declare module 'transformation-matrix/rotate' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a rotation matrix
   * @param angle Angle in radians
   * @param cx If (cx,cy) are supplied the rotate is about this point
   * @param cy If (cx,cy) are supplied the rotate is about this point
   */
  export function rotate(angle: number, cx?: number, cy?: number): Matrix;
  /** Calculate a rotation matrix with a DEG angle
   * @param angle Angle in degree
   * @param cx If (cx,cy) are supplied the rotate is about this point
   * @param cy If (cx,cy) are supplied the rotate is about this point*/
  export function rotateDEG(angle: number, cx?: number, cy?: number): Matrix;
}

declare module 'transformation-matrix/scale' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a scaling matrix
   * @param sx Scaling on axis x
   * @param sy Scaling on axis y (default `sx`)
   */
  export function scale(sx: number, sy?: number): Matrix;
}

declare module 'transformation-matrix/shear' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a shear matrix */
  export function shear(shx: number, shy: number): Matrix;
}

declare module 'transformation-matrix/skew' {
  import { Matrix } from 'transformation-matrix';

  /** Calculate a skew matrix */
  export function skew(ax: number, ay: number): Matrix;
}

declare module 'transformation-matrix/toString' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toSVG(matrix: Matrix): string;
  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toCSS(matrix: Matrix): string;
  /**
   * Serialize the matrix to a string that can be used with CSS or SVG
   * @returns {string} String that contains a matrix formatted as `matrix(a,b,c,d,e,f)`
   */
  export function toString(matrix: Matrix): string;
}

declare module 'transformation-matrix/transform' {
  import { Matrix } from 'transformation-matrix';

  /** Merge multiple matrices into one */
  export function transform(...matrices: Matrix[]): Matrix;
}

declare module 'transformation-matrix/translate' {
  import { Matrix } from 'transformation-matrix';

  /**
   * Calculate a translate matrix
   * @param tx Translation on axis x
   * @param ty Translation on axis y (default `0`)
   */
  export function translate(tx: number, ty?: number): Matrix;
}

declare module 'transformation-matrix' {
  export * from 'transformation-matrix/applyToPoint';
  export * from 'transformation-matrix/fromObject';
  export * from 'transformation-matrix/fromString';
  export * from 'transformation-matrix/identity';
  export * from 'transformation-matrix/inverse';
  export * from 'transformation-matrix/isAffineMatrix';
  export * from 'transformation-matrix/rotate';
  export * from 'transformation-matrix/scale';
  export * from 'transformation-matrix/skew';
  export * from 'transformation-matrix/shear';
  export * from 'transformation-matrix/toString';
  export * from 'transformation-matrix/transform';
  export * from 'transformation-matrix/translate';
}
