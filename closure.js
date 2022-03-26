/*
Un método va a poder acceder además del Scope interno del mismo
a todas aquellas cosas que esten definidas en el mismo lugar 
donde el método se define
*/

// Pregunta de ejercicio, esto funciona?
const bunny = {
    name: 'MyName',
    tasks: ['Speak', 'Learn', 'Teach'],
    showTasks: function() {
        this.tasks.forEach(function(task) {
            console.log(this.name + " wants to: " + task)
        });
    },
}
bunny.showTasks();
//console.log(bunny.showTasks);
/* 
undefinedwants to: Speak
undefinedwants to: Learn
undefinedwants to: Teach
*/