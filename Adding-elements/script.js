// Adding Elements (with append)

/*Creamos una variable y le asignamos a donde queremos apuntar con
document. en este caso al body de nuestro HTML */

const body = document.body;

body.append("Hello world ", "Bye");

// Creating Elements

const div = document.createElement('div');

body.append(div);