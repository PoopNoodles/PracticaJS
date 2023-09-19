var x1 = 5;
var x2 = 7;

var x3;

// (>), (<), (>=), (<=), (==)

x3 = x1>x2; // false
console.log("x1>x2 : ", x3);

x3 = x1>=x2; // false
console.log("x1>=x2 : ", x3);

x3 = x1==x2; // false
console.log("x1==x2 : ", x3);

x3 = x1<=x2; // true
console.log("x1<=x2 : ", x3);

x3 = x1<x2; // true
console.log("x1<x2 : ", x3);

//los operadores de comparación siempre darán valores booleanos en el output
//darán "true" cuando se cumpla la condición de comparación
//darán "false" cuando la condición no sea verdadera