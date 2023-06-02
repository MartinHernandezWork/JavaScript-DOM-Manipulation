const body = document.body;
const div = document.querySelector('div');
const spanHi = document.getElementById("hi");
const spanBye = document.getElementById("bye");

// Modifiying Elements Atributes

// Esto muestra el atributo que queremos buscar, en este caso id.

spanHi.getAttribute("id");

// Esto modifica el atributo que querramos.

spanHi.setAttribute("id", "change");

// Esto elimina un atributo.

spanBye.removeAttribute("id");

//Modifying Data Atributes

console.log(spanHi.dataset);

console.log(spanHi.dataset.test);

console.log(spanHi.dataset.newName = "hi");

// Modifiying Element Classes

spanBye.classList.add("new-class");

spanBye.classList.remove("hi1");

spanBye.classList.toggle("hi3", true);

// Modifying Element Style

spanHi.style.color = "red";

spanBye.style.backgroundColor = "lightBlue";