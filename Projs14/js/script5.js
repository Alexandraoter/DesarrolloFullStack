//WHILE

// let i = 1;
// // while para imprimir los numeros del 1 al 10
// while(i <=10){
//     console.log(i);
//     i++
// }

//sumar los numeros del 1 al 100
// declara una variable para almacenar la suma
// let suma=0;
// //declara una variable de control
// let i = 1;

// while(i<= 100){
//     suma += i;
//     i++
// }
// // imprime el resultado
// console.log("la suma de los numeros del 1 al 100 es: ", suma);

// array con while

// let frutas = ["manzana", "Banana", "cereza", "durazno"];

// // variable de control
// let i = 0;
// // se usa un bucle while para imprimir cada fruta
// while(i<frutas.length){
//     console.log(frutas[i]);
//     i+=3;
// }

// array para numeros pares
let num = [1, 2,6,7,3,8,9];
let i = 0;

while(i < num.length){
    if(num[i] %2==0){
        console.log("el primer numero par es: ", num[i]);
        break;
    }
    
    i++;
}