# transformation-matrix
2d transformation matrix functions written in ES6 syntax. Tree shaking ready!

## Setup
```sh
  npm install transformation-matrix
```
## Usage example (ES6)
```sh
import {scale, rotate, translate, transform} from 'transformation-matrix';

let matrix = transform(scale(40,40), rotate(Math.PI/2), scale(2, 4));
let point = applyToPoint(matrix, {42, 42});
```
# API Reference
## Constants

<dl>
<dt><a href="#matrixRegex">matrixRegex</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#identity">identity()</a> ⇒ <code>Object</code></dt>
<dd><p>Get identity matrix</p>
</dd>
<dt><a href="#transform">transform(matrices)</a></dt>
<dd></dd>
<dt><a href="#inverse">inverse(matrix)</a></dt>
<dd></dd>
<dt><a href="#translate">translate(tx, ty)</a></dt>
<dd></dd>
<dt><a href="#scale">scale(sx, sy)</a></dt>
<dd></dd>
<dt><a href="#rotate">rotate(angle)</a></dt>
<dd></dd>
<dt><a href="#rotateDEG">rotateDEG(angle)</a></dt>
<dd></dd>
<dt><a href="#applyToPoint">applyToPoint(matrix, point)</a></dt>
<dd></dd>
<dt><a href="#applyToPoints">applyToPoints(matrix, points)</a></dt>
<dd></dd>
<dt><a href="#toCSS">toCSS(matrix)</a></dt>
<dd></dd>
<dt><a href="#toSVG">toSVG(matrix)</a></dt>
<dd></dd>
<dt><a href="#toString">toString(matrix)</a></dt>
<dd></dd>
</dl>

<a name="matrixRegex"></a>

## matrixRegex
**Kind**: global constant  

| Param |
| --- |
| string | 

<a name="identity"></a>

## identity() ⇒ <code>Object</code>
Get identity matrix

**Kind**: global function  
<a name="transform"></a>

## transform(matrices)
**Kind**: global function  

| Param |
| --- |
| matrices | 

<a name="inverse"></a>

## inverse(matrix)
**Kind**: global function  

| Param |
| --- |
| matrix | 

<a name="translate"></a>

## translate(tx, ty)
**Kind**: global function  

| Param |
| --- |
| tx | 
| ty | 

<a name="scale"></a>

## scale(sx, sy)
**Kind**: global function  

| Param |
| --- |
| sx | 
| sy | 

<a name="rotate"></a>

## rotate(angle)
**Kind**: global function  

| Param |
| --- |
| angle | 

<a name="rotateDEG"></a>

## rotateDEG(angle)
**Kind**: global function  

| Param |
| --- |
| angle | 

<a name="applyToPoint"></a>

## applyToPoint(matrix, point)
**Kind**: global function  

| Param |
| --- |
| matrix | 
| point | 

<a name="applyToPoints"></a>

## applyToPoints(matrix, points)
**Kind**: global function  

| Param |
| --- |
| matrix | 
| points | 

<a name="toCSS"></a>

## toCSS(matrix)
**Kind**: global function  

| Param |
| --- |
| matrix | 

<a name="toSVG"></a>

## toSVG(matrix)
**Kind**: global function  

| Param |
| --- |
| matrix | 

<a name="toString"></a>

## toString(matrix)
**Kind**: global function  

| Param |
| --- |
| matrix | 


## Changelog
- **1.0.0** - First release

## Contributing
Your contributions (issues and pull request) are very appreciated!

## Author
- [chrvadala](https://github.com/chrvadala)

## License
MIT
