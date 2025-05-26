// funcion para calcular area de un circulo
function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio,2);
}
console.log(calcularAreaCirculo(5));

// funcion para saber si el numero es par o no
function esPar(numero){
    return numero %2==0;
}
let num1= 4;
let num2= 7;
console.log(`${num1} es ${esPar(num1) ? "Par" : "Impar"}`)
console.log(`${num2} es ${esPar(num2) ? "Par" : "Impar"}`)

// funcion para convertir una cadena  a mayusculas 
function convertirMayusculas(cadena){
    return cadena.toUpperCase(cadena);  //to aperrcase es lo que hace esa conversion
}
console.log(convertirMayusculas("Hola mundo"));

// funcion para encontrar el numero maximo en un array
function encontrarMaximo(array){
    return Math.max(...array);
}
console.log(encontrarMaximo([23,5,78,97,5]));