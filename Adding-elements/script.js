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

//Modifying Element Text

/* agregamos texto a nuestro div .

NOTA: existen 2 maneras de declara texto, innerText y textContent, lo que cambia es la visibilidad
y la forma en que se interpreta que se quiere mostrar y que no. */

div.innerText = "Hello web!"

//Modifying Element HTML

/* para usar html en js tenemos que utilizar innerHTML */

div.innerHTML = "<h2>Bye web!</h2>"

/* NOTA: Esto es una manera poco segura de integrar HTML en js, ya que nuestros usuarios podrian escribir
codigo malicioso. para esto, existe otra manera de replicar lo anterior de una manera mas segura,
de la siguiente manera: */

const strong = document.createElement('strong')
strong.innerText = "Hello world 2"
div.append(strong)

div.remove()