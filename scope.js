/* 
Es el contexto donde vamos a definir nuestras variables y metodos
Scope interno de una funcion
Es el lugar donde definimos tanto metodos como variables
*/

// Ejercicio de Scope, cual es el resultado de suma?

const a = 1;

function suma() {
    const b = 2;
    return suma2();
}
const b = 3;
const c = 1;

function suma2() {
    const c = 3;
    return a + b + c;
}
console.log(suma());