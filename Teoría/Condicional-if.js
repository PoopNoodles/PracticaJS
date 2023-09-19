var x = 3;

if(x==2){
  console.log("OK 2"); //mientras x sea igual a 2, imprimir "OK 2"
}else if(x==4){ 
  console.log("OK 4"); //si no, si x es igual a 4, imprimir "OK 4"
}else{
  console.log("NO 2  4") //si no (si ninguna de las dos condiciones se cumple), imprimir "NO 2 4"
}

/*en este caso, ninguna de las dos es true
  porque le hemos dado a la var x el valor de 3,
  por ello solamente se ejecuta la condición else.*/