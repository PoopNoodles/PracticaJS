console.log(0); //imprimimos los números de 0 a 9 en el output
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);

console.log("--------------"); //imprimimos esto como string de texto para separar del resultado del bucle

for(var i=0; i<=10; i=i+2){ 
  console.log(i);
}

/* inicializamos bucle for iniciando la var en 0,
   añadimos la condición (i<=10) al bucle para que se repita mientras la var (i) sea menos o igual a 10,
   sumamos 2 al valor inicial de i (0+2=2), esto hace que en el output cuente de 2 en 2 hasta 9. */