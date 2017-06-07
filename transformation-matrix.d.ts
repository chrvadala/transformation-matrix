declare type Matrix = {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
};

declare type Point = { x: number; y: number };

declare module 'transformation-matrix/applyToPoint' {
  /** Calculate a point transformed with an affine matrix */
  export function applyToPoint(matrix: Matrix, point: Point): Point;
  /** Calculate an array of points transformed with an affine matrix */
  export function applyToPoints(matrix: Matrix, points: Point[]): Point[];
}

declare module 'transformation-matrix/fromString' {
  /** Parse a string matrix formatted as matrix(a,b,c,d,e,f) */
  export function fromString(str: string): Matrix;
}

declare module 'transformation-matrix/fromObject' {
  /**
   * Extract an affine matrix from an object that contains a,b,c,d,e,f keys.
   * Each value could be a float or a string that contains a float
   */
  export function fromObject(
    object: {
      a: string | number;
      b: string | number;
      c: string | number;
      d: string | number;
      e: string | number;
      f: string | number;
    },
  ): Matrix;
}

declare module 'transformation-matrix/identity' {
  /** Identity matrix */
  export function identity(): Matrix;
}

declare module 'transformation-matrix/inverse' {
  /** Calculate a matrix that is the inverse of the provided matrix */
  export function inverse(matrix: Matrix): Matrix;
}

declare module 'transformation-matrix/isAffineMatrix' {
  /** Check if the object contain an affine matrix */
  export function isAffineMatrix(obj: object): boolean;
}

declare module 'transformation-matrix/rotate' {
  /** Calculate a rotation matrix */
  export function rotate(angle: number): Matrix;
  /** Calculate a rotation matrix with a DEG angle */
  export function rotateDEG(angle: number): Matrix;
}

declare module 'transformation-matrix/scale' {
  /** Calculate a scaling matrix */
  export function scale(sx: number, sy: number): Matrix;
}

declare module 'transformation-matrix/shear' {
  /** Calculate a shear matrix */
  export function shear(shx: number, shy: number): Matrix;
}

declare module 'transformation-matrix/toString' {
  /** Serialize the matrix to a string that can be used with CSS or SVG */
  export function toSVG(matrix: Matrix): string;
  /** Serialize the matrix to a string that can be used with CSS or SVG */
  export function toCSS(matrix: Matrix): string;
  /** Serialize the matrix to a string that can be used with CSS or SVG */
  export function toString(matrix: Matrix): string;
}

declare module 'transformation-matrix/transform' {
  /** Merge multiple matrices into one */
  export function transform(...matrices: Matrix[]): Matrix;
}

declare module 'transformation-matrix/translate' {
  /** Calculate a translate matrix */
  export function translate(tx: number, ty: number): Matrix;
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
  export * from 'transformation-matrix/shear';
  export * from 'transformation-matrix/toString';
  export * from 'transformation-matrix/transform';
  export * from 'transformation-matrix/translate';
}
