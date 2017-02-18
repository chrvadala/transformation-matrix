# transformation-matrix
2d transformation matrix functions written in ES6 syntax. Tree shaking ready!
[![Build Status](https://travis-ci.org/chrvadala/transformation-matrix.svg?branch=master)](https://travis-ci.org/chrvadala/transformation-matrix)
[![npm](https://img.shields.io/npm/v/transformation-matrix.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/transformation-matrix)
![es-next-compliant](https://img.shields.io/badge/es:next-compliant-fbde34.svg)
![license-mit](https://img.shields.io/badge/license-MIT-42cd00.svg)

## Setup
```sh
  npm install transformation-matrix
```
## Usage example (ES6)
```sh
import {scale, rotate, translate, transform} from 'transformation-matrix';

let matrix = transform(
  scale(40,40),
  rotate(Math.PI/2),
  scale(2, 4)
);
let point = applyToPoint(matrix, {42, 42});
```
# Reference
## Functions

<dl>
<dt><a href="#identity">identity()</a> ⇒ <code>Object</code></dt>
<dd><p>Identity matrix</p>
</dd>
<dt><a href="#transform">transform(matrices)</a> ⇒ <code>Object</code></dt>
<dd><p>Merge multiple matrices into one</p>
</dd>
<dt><a href="#inverse">inverse(matrix)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a matrix that is the inverse of the provided matrix</p>
</dd>
<dt><a href="#translate">translate(tx, ty)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a translate matrix</p>
</dd>
<dt><a href="#scale">scale(sx, sy)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a scaling matrix</p>
</dd>
<dt><a href="#rotate">rotate(angle)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a rotation matrix</p>
</dd>
<dt><a href="#rotateDEG">rotateDEG(angle)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a rotation matrix with a DEG angle</p>
</dd>
<dt><a href="#applyToPoint">applyToPoint(matrix, point)</a> ⇒ <code>Object</code></dt>
<dd><p>Calculate a point transformed with an affine matrix</p>
</dd>
<dt><a href="#applyToPoints">applyToPoints(matrix, points)</a> ⇒ <code>array</code></dt>
<dd><p>Calculate an array of points transformed with an affine matrix</p>
</dd>
<dt><a href="#toCSS">toCSS(matrix)</a> ⇒ <code>string</code></dt>
<dd><p>Serialize the matrix to a string that can be used with CSS or SVG</p>
</dd>
<dt><a href="#toSVG">toSVG(matrix)</a> ⇒ <code>string</code></dt>
<dd><p>Serialize the matrix to a string that can be used with CSS or SVG</p>
</dd>
<dt><a href="#toString">toString(matrix)</a> ⇒ <code>string</code></dt>
<dd><p>Serialize the matrix to a string that can be used with CSS or SVG</p>
</dd>
<dt><a href="#fromString">fromString(string)</a> ⇒ <code>Object</code></dt>
<dd><p>Parse a string matrix formatted as matrix(a,b,c,d,e,f)</p>
</dd>
</dl>

## Changelog
- **0.0.1** - Preview version

## Contributing
Your contributions (issues and pull request) are very appreciated!

## Author
- [chrvadala](https://github.com/chrvadala)

## License
MIT

# API
<a name="identity"></a>

## identity() ⇒ <code>Object</code>
Identity matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  
<a name="transform"></a>

## transform(matrices) ⇒ <code>Object</code>
Merge multiple matrices into one

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| matrices | list of matrices |

<a name="inverse"></a>

## inverse(matrix) ⇒ <code>Object</code>
Calculate a matrix that is the inverse of the provided matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |

<a name="translate"></a>

## translate(tx, ty) ⇒ <code>Object</code>
Calculate a translate matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| tx | Translation on axis x |
| ty | Translation on axis y |

<a name="scale"></a>

## scale(sx, sy) ⇒ <code>Object</code>
Calculate a scaling matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| sx | Scaling on axis x |
| sy | Scaling on axis y |

<a name="rotate"></a>

## rotate(angle) ⇒ <code>Object</code>
Calculate a rotation matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix *  

| Param | Description |
| --- | --- |
| angle | Angle in radians |

<a name="rotateDEG"></a>

## rotateDEG(angle) ⇒ <code>Object</code>
Calculate a rotation matrix with a DEG angle

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| angle | Angle in degree |

<a name="applyToPoint"></a>

## applyToPoint(matrix, point) ⇒ <code>Object</code>
Calculate a point transformed with an affine matrix

**Kind**: global function  
**Returns**: <code>Object</code> - Point  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |
| point | Point |

<a name="applyToPoints"></a>

## applyToPoints(matrix, points) ⇒ <code>array</code>
Calculate an array of points transformed with an affine matrix

**Kind**: global function  
**Returns**: <code>array</code> - Array of points  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |
| points | Array of points |

<a name="toCSS"></a>

## toCSS(matrix) ⇒ <code>string</code>
Serialize the matrix to a string that can be used with CSS or SVG

**Kind**: global function  
**Returns**: <code>string</code> - String that contains a matrix formatted as matrix(a,b,c,d,e,f)  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |

<a name="toSVG"></a>

## toSVG(matrix) ⇒ <code>string</code>
Serialize the matrix to a string that can be used with CSS or SVG

**Kind**: global function  
**Returns**: <code>string</code> - String that contains a matrix formatted as matrix(a,b,c,d,e,f)  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |

<a name="toString"></a>

## toString(matrix) ⇒ <code>string</code>
Serialize the matrix to a string that can be used with CSS or SVG

**Kind**: global function  
**Returns**: <code>string</code> - String that contains a matrix formatted as matrix(a,b,c,d,e,f)  

| Param | Description |
| --- | --- |
| matrix | Affine matrix |

<a name="fromString"></a>

## fromString(string) ⇒ <code>Object</code>
Parse a string matrix formatted as matrix(a,b,c,d,e,f)

**Kind**: global function  
**Returns**: <code>Object</code> - Affine matrix  

| Param | Description |
| --- | --- |
| string | String with a matrix |

