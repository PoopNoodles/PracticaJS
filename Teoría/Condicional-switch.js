var x = 5

switch(x){
  case 1:
    console.log("x = 1"); //en el caso de que x=1, ejecutará esta línea y imprimirá el texto "x = 1"
    break;
    /*usamos break para detener el bloque switch una vez se haya ejecutado un caso.
    De no ser así, se continuaría ejecutando el mismo caso de forma infinita.*/
  case 2:
    console.log("x = 2");
    break;
  case 3:
    console.log("x = 3");
    break;
  default:
    console.log("NO"); //mientras no se cumpla ninguno de los anteriores casos, su respuesta siempre será ejecutar esto(default)            
}

/*El condicional switch se utiliza para comprobar el valor que 
le hemos asignado a una variable, para así ejecutar unas líneas
de código u otras, dependiendo de si se cumple el valor asignado.*/

