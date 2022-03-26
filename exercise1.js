/* Escribir un algoritmo que: imprima los números del 1 al 100, con la condición que si el 
número a imprimir es multiplo de 3, imprima el string 'Fizz', si el numero es multiplo de 
5 imprima: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz' */

function fizzbuzz() {
    for (let i = 1; i<=100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i + " FizzBuzz");
        } else if (i % 3 === 0) {
            console.log(i + " Fizz");
        } else if (i % 5 === 0) {
            console.log(i + " Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];  
// }