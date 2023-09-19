var x1; //inicializamos variables sin ningún valor aún (x1 y x2)
var x2;

x1 = 3; //damos valores a las variables x1 y x2
x2 = 4;

var x3; //inicializamos variable x3 sin valor

x3 = x1 + x2; //añadimos valor a x3 mediante la suma de variables x1 + x2 (llamamos por su nombre, al tener ya sus valores añadidos)
console.log("x1 + x2 = ", x3); //imprimimos string de texto y llamamos la var x3 para expresar su resultado en output
console.log("x1 + x2 = ", x1 + x2); //imprimimos string de texto y operamos con var x1 y x2 directamente para recibir texto y resultado de ésta como output

x3 = x1 - x2; //modificamos valor de variable x3
console.log("x1 - x2 = ", x3); // imprimimos en output llamando a x3 (esto reflejará el nuevo valor que le hemos dado)

x3 = x1 * x2;
console.log("x1 * x2 = ", x3);

x3 = x1 / x2;
console.log("x1 / x2 = ", x3);

x3 = x1 % x2;
console.log("x1 % x2 = ", x3);

//x1++; //añadir ++ a una var aumenta su valor +1, afectando a todo lo que hagamos con esa variable a partir de esta línea.
//x1+=1; //otra forma de expresar lo mismo.
x1=x1+1; //las dos formas anteriores se pueden usar para abreviar esto

console.log("x1 = ", x1);