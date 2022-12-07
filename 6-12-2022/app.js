/* 
  Un objeto es un  tipo de dato compuesto o complejo,
    que se forma a través de llaves y comas. Su estructura esta formada
    por un propiedad y su valor
    sintaxis:
    {} Objeto vacío
    {propiedad1: valor1, propiedad2: valor2} Objeto con propiedades
    {
      propiedad1: valor1,
      propiedad2: valor2,
      propiedad3: valor3,
    }
    Podemos acceder a la propiedad de un objeto utilizando
    el nombre del objeto, punto y el nombre de la propiedad
    objetoName.propiedad
*/

// let $divPrincipal = document.getElementById("div-main");

// $divPrincipal.innerHTML = `
//     <h2>Hola soy un subtitulo desde Javascript</h2>
// `;

//Arrow function
// const verTabla = (multiplicador) => {
//   for (let i = 1; i <= 100; i = i + 2) {
//     $divPrincipal.innerHTML += `
//     <div>
//       <h2>Hola! estamos multiplicando el numero: ${i}</h2>
//       <p class="text">${multiplicador} x ${i} es igual a: ${
//       i * multiplicador
//     }</p>
//     </div>
//     `;
//   }
// };

// verTabla(6);

/* Un array es un  tipo de dato compuesto o complejo,
    que se forma a traves de corchetes y comas
    sintaxis:
    [ ] Array vacío
    [elemento1, elemento2, elemento3] Array con 3 elementos
    asignando el arreglo a _const_ no puedo modificar o
    cambiar el tipo de dato, pero si el contenido del mismo
    let playlist = ['Smells Like Teen Spirit', 'Come As You Are', 'Heart-Shaped Box', 'Lithium'];
    let datos = [
      'Ada',
      42,
      true,
      null,
      function() { console.log('¡hola!') }
    ];
    cada espacio ocupado en nuestro array es un indice
    Los indices se inician a contar en 0
    Para acceder a los elementos del array utilizamos el índice
    nombreDelArreglo[numeroIndice] esto devuelve el valor de lo que guarda
*/

//Array -> listas.

//Ingresa a la 4° posición
// console.log(alumnas[3]);

//Ingresa a la primer posición
// console.log(alumnas[0]);

// const arrayConDiferentesDatos = [
//   "Gabriel",
//   null,
//   false,
//   18,
//   ["frutilla", "manzana", ["rojo", "azul"]],
// ];

//Matriz o array anidado
// console.log(arrayConDiferentesDatos[4][2][1]); // azul

// const alumnas = ["flor", "gabi", "maira", "clara", "angelly"];

// console.log(alumnas[3]);

// console.log(alumnas.length);

// for (let i = 0; i <= alumnas.length; i++) {
//   console.log(`Hola ${alumnas[i]}`);
// }

// const gustosDeHeladosFav = [
//   "Kinoto al whisky",
//   "banana con dulce",
//   "tramontana",
// ];

// console.log(gustosDeHeladosFav);

// //Agrega elemento al final
// gustosDeHeladosFav.push("Tiramisu");

// console.log(gustosDeHeladosFav);

// //Agrega elemento al principio
// gustosDeHeladosFav.unshift("Frutilla");

// console.log(gustosDeHeladosFav);

// const apellido = "Alberini";

// console.log(apellido);

//No se puede desefinir una variable declarada como const, a no ser que sea un array o un objeto. Esto es así porque no se esta redefiniendo, si no, modificando.
// apellido = "Molina";

//for of
//la variable que declaramos dentro debe llamarse como el elemento que itera en singular
// for (let gusto of gustosDeHeladosFav) {
//   console.log(`Me gusta ${gusto}`);
// }

// const peliculas = ["101 dalmatas", "el padrino", ["pelicula 1", "pelicula 2"]];

// for (let pelicula of peliculas[2]) {
//   console.log(`No vi ${pelicula}`);
// }

// const alumnas = ["Claudia", "Ruth", "Belen", "Noemí"];

// console.log("antes de eliminar", alumnas);

// alumnas.pop();

// console.log("despues de eliminar ultimo elemento", alumnas);

// let primerAlumnaEliminada = alumnas.shift();

// console.log("despues de eliminar primer elemento", alumnas);

// console.log(primerAlumnaEliminada);

//Una variable se puede declarar con un array vacio.
// const alumnasA = ["Isabel", "Angelly"];
// const alumnasB = ["Gabi", "Clara"];

// const totalAlumnas = alumnasA.concat(alumnasB);

// console.log(totalAlumnas);

/* 
  Un objeto es un  tipo de dato compuesto o complejo,
    que se forma a través de llaves y comas. Su estructura esta formada
    por un propiedad y su valor
    sintaxis:
    {} Objeto vacío
    {propiedad1: valor1, propiedad2: valor2} Objeto con propiedades
    {
      propiedad1: valor1,
      propiedad2: valor2,
      propiedad3: valor3,
    }
    Podemos acceder a la propiedad de un objeto utilizando
    el nombre del objeto, punto y el nombre de la propiedad
    objetoName.propiedad
*/

//Declaración de array y objetos vacios
// let array = [];

// let objeto = {};

// const celular = ["camara", "pantalla hd", 230]

// const celular = {
//   // key : value
//   pantala: "150px",
//   camaras: 3,
//   cargaRapida: true,
//   ram: 16,
// };

// const persona = {
//   nombre: "Gabriel",
//   anioDeNacimiento: 1994,
//   colorFav: "Celeste",
//   altura: 1.71,
//   lenguajesAprendedidos: ["Javascript", "Node", "HTML", "CSS"],
//   calcularEdad: function () {
//     return 2022 - this.anioDeNacimiento;
//   },
// };

// console.log(persona.nombre);
// console.log(persona.anioDeNacimiento);
// console.log(persona.colorFav);
// console.log(persona.altura);
// console.log(persona.lenguajesAprendedidos);
// console.log(persona.calcularEdad());

//Busqueda en objeto por llaves, se utiliza cuando queremos buscar keys de forma dinámica
// let key = "altura";
// console.log(persona[key]);

// persona.hobbies = ["ciclsimo", "Jugar al lol"];

// console.log(persona);

// persona.altura = 1.73;

//Copiar un objeto
// const clonPersona = persona;

// console.log(persona);
// console.log(clonPersona);

// clonPersona.gustosMusicales = ["Rock", "Cumbia"];

// console.log("clon", clonPersona);
// console.log("original", persona);

//Copia.
// const segundoClonDePersona = { ...persona };

// segundoClonDePersona.comidas = [
//   "ñoquis",
//   "ravioles",
//   "asado",
//   "milanesa",
//   "fideito",
// ];

// console.log("segundo clon", segundoClonDePersona);
// console.log("original", persona);

// const tercerClonPersona = {
//   nombre: persona.nombre,
//   edad: persona.calcularEdad(),
// };

// console.log(tercerClonPersona);

//for in
// for (let propiedad in persona) {
//   console.log(
//     `En la key ${propiedad} se encuentra el value ${persona[propiedad]}`
//   );
// }

// console.log(persona.nombre);
