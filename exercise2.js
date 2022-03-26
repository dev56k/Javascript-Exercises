/* Escribir un algoritmo que: imprima los números del 1 al 100, con la condición que si el 
número a imprimir es multiplo de 3, imprima el string 'Fizz', si el numero es multiplo de 
5 imprima: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz' */

function fizzbuzz() {
    for (let i = 1; i<=100; i++) {
        let mensaje = ''
        if (i % 3 === 0) {
            mensaje+='Fizz';
        }
        if (i % 5 === 0) {
            mensaje+='Buzz';
        }
        console.log(mensaje || i);
    }
}
fizzbuzz();