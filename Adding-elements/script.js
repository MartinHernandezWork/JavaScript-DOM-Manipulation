// Adding Elements (with append)

/* Creamos una variable y le asignamos a donde queremos apuntar con
document. en este caso al body de nuestro HTML */

/* Luego incorporamos nuestros elementos con .append() */

const body = document.body;

body.append("Hello world ", "Bye");

// Creating Elements

/* Creamos un elemento con document.createElement('') puede ser cualquier
tipo */

const div = document.createElement('div');

body.append(div);