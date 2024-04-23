
// let nombre = 'Angel';

// nombre = 'Rodolfo'

// var nombre1 = 'Angel';
// nombre1 = 'Rodolfo'

// const nombre2 = 'Angel';
// // nombre2 = 'Rodolfo'

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

// alert("Hola este es mi JS " + nombre)

// SELECCIONAR ELEMENTOS

// let contenidoTitulo = 'Nombre';

// let titulo = document.querySelector('.tituloPrincipal');


// console.log(titulo.innerHTML);
// titulo.innerHTML = contenidoTitulo // Insertamos al html el contenido del titulo

//CONDICIONALES
// let textoTitulo = titulo.innerText; //sacamos del titulo el contenido
// console.log(textoTitulo);

// if(textoTitulo == 'Nombre') {
//     titulo.innerHTML = 'Otro'
// } else {
//     console.log("No se Cumple")
// }


// let nombre = 'Ani';
// let ciudad = 'Prueba';
// let gusto = 'Prueba Gusto';

// let parrafo = document.querySelector('.parrafo2');

// function cambiarTexto(nombre,ciudad,gusto) {
//     let contenido = `Hola estas son mis variables ${nombre} ${ciudad} ${gusto}`
//     return contenido
// }

// parrafo.innerText = cambiarTexto(nombre,ciudad,gusto)



let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  // toogle lo que hace esque si la clase ya esta presente lo aplica y si no lo quita la clase
  navBar.classList.toggle("active");
  console.log("hola mundo");  //ANGEL
};