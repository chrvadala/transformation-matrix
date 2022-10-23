# How to handle gestures with transformation-matrix

Transformation matrix provides you two useful functions that simplify gestures math. They are platform agnostic and can be used in mobile or desktop contextes. 

These functions get few points as input and return a matrix that transform your canvas to the new position.

## Single finger gesture
`fromOneMovingPoint` is for context when the user **interact with a single finger**. You have to provide two points: where the user started the interaction and where he completed, then the function returns a transformation matrix with the new canvas position

````js
function fromOneMovingPoint (startingPoint, endingPoint)
````

## Two finger gesture
`fromTwoMovingPoints` is for context when user **interact with two fingers**. You have to map the fingers starting position and the end positions, then the function provides you a transformation matrix with the new canvas position.

````js
function fromTwoMovingPoints (startingPoint1, startingPoint2, endingPoint1, endingPoint2)
````

## Web App Demo

In order to show you how these functions work, it is available a web app application. You can open these demo on a gesture-ready device (e.g. smartphone, tablet,..) and interact with the image using your fingers.

The web application is available on this link: [Tranformation Matrix gestures demo](https://codesandbox.io/s/github/chrvadala/transformation-matrix/tree/main/examples/gestures) 

If you want to inspect the logic behind this demo, you can read the following source code [tranformation-matrix/examples/gestures/assets/app.js](https://github.com/chrvadala/transformation-matrix/blob/main/examples/gestures/assets/app.js)