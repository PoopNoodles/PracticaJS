var i = 0; //inicializamos variable i en 0

while(i<10){ //iniciamos bucle while con condición de que se repita mientras sea menor a 10 (i<10)
 console.log(i); //ordenamos al bucle imprimir el valor de i continuamente (al estar el comando dentro del bucle)
 i=i+1; //incrementamos el valor de i +1 dentro del bucle (esto hace que el valor de i se incremente +1 en cada iteración del bucle)
}

console.log("--------------------");

i=0
do{ //esto es un bucle do-while.
  i=i+1; //hace que se ejecute el bucle al menos una vez antes de comprobar la condición while
  console.log(i);
} while(i<10) //la condición se añade al terminar el bucle

/*En el caso del do while, imprimirá hasta 10
ya que ha reproducido el bucle antes de comprobar 
la condición (i<10).

Si esto fuera un bucle while, la condición sería
comprobada antes de reproducir el bucle,
por lo que solo imprimiría hasta 9 (no es i=<10, por lo que no incluye 10)*/