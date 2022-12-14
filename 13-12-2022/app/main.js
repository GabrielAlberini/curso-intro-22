//Eventos HTML y callback (función que se ejecuta despues del evento)
// const $boton = document.getElementById("boton");

// $boton.addEventListener("click", () => {
//   alert("Hola, hiciste click");
// });

// const frutas = ["banana", "frutilla", "melon", "anana"];

// //for in -> para arrays porque nos devuelve cada elemento
// for (let fruta in frutas) {
//   console.log(fruta);
// }

// const messi = {
//   altura: 1.69,
//   balonesDeOro: 7,
//   hijos: 3,
//   partidos: 1000,
// };

// //for in -> para objetos porque nos devuelve las propiedes
// for (let propiedad in messi) {
//   console.log(propiedad);
// }

// console.log("Aca el:", frutas[2]);
// console.log("Messi jugo:", messi.partidos);
// console.log(`Messi jugo ${messi.partidos} partidos`);

// Métodos de los arreglos

// length == longitud
// La longitud de un arreglo si inicia a partir de 0
// const frutas = ["pera", "manzana", "platano", "uva", "sandía", "anana"];
// console.log("longitud del arreglo", frutas.length); // 5

// A través de _length_ podeos obtener el último elemento
// console.log(frutas[frutas.length - 1]);

// Push == Agregar uno o más elementos al FINAL del arreglo
const pisosEdificio = [1, 2, 3, 4];
pisosEdificio.push(5, 6, 7, 8, 9, "terraza");
// console.log(pisosEdificio);

// const grace = {
//   colorFav: "Celeste",
//   apellido: "Benbassat",
//   gustosDeHelado: ["maracuya", "chocolate amargo"],
// };

// grace.gustosDeHelado.push("frambuesa patagonica");

// console.log(grace);

// const apellidos = ["poletti", "abuaf", "villafañe", "d'angelo"];

// console.log("antes del orden", apellidos);

// apellidos.sort();

// console.log("despues del orden", apellidos);

const numeros = [12, 54, 95, 3, 6, 42];

console.log("antes del orden", numeros);

//Función comparadora
// numeros.sort((comparar, comparado) => {
//   return comparar - comparado;
// });

numeros.sort((a, b) => {
  //Ordena de mayor a menor los elementos de un array
  return b - a;

  //Oredena de menor a mayor los elementos de un array
  //return a - b;
});

// console.log("despues del orden", numeros);

// const arboles = ["jacaradá", "fresno", "pezuña de vaca", "abedul"];

// arboles.reverse();

// console.log(arboles);

// const nombresDeAlumnos = [];

// nombresDeAlumnos.push("luisito");
// nombresDeAlumnos.push("martita");
// nombresDeAlumnos.push("lolo");
// nombresDeAlumnos.push("jazmin");

// console.log(nombresDeAlumnos);

// nombresDeAlumnos.reverse();

// console.log(nombresDeAlumnos);
// console.log(nombresDeAlumnos.sort());
// console.log("nombres al revez", nombresDeAlumnos.reverse());

// console.log("posición de la heladera", electrodomesticos.indexOf("heladera"));

// console.log("posicion de licuadora", electrodomesticos.indexOf("licuadora"));
// console.log("posicion de licuadora", electrodomesticos.indexOf("trituradora"));
// console.log(
//   "posicion de licuadora",
//   electrodomesticos.indexOf("mortero electrico")
// );

// const validarElectrodomestico = (electrodomestico) => {
//   if (electrodomesticos.indexOf(electrodomestico) === -1) {
//     return false;
//   } else {
//     return true;
//   }
// };

//Retornar valor con arrow function en una sola linea
// const validarElectrodomestico = (electrodomestico) =>
//   electrodomesticos.indexOf(electrodomestico) >= 0;
// console.log(validarElectrodomestico("heladera"));

// forEach == permite recorrer un arreglo por cada uno de los elementos
/**
 * palabra reservada _forEach_
 * parentesis que esperan una funcion como parametro
 * esta funcion tambien usa otro parametro que es el elemento del arreglo
 *
 * arreglo.forEach( (elementoDelArreglo)=>{tareas a ejecutar} )
 */

const electrodomesticos = [
  "pava eléctrica",
  "microondas",
  "tostadora",
  "heladera",
];

electrodomesticos.forEach((electrodomestico) => {
  // console.log(`En mi casa tengo ${electrodomestico}`);
});

// Map == Crear un nuevo arreglo con el resultado de lo que indiquemos en el ciclo

const apellidosDeNinios = ["aLberinI", "GoMeZ", "GineR"];

const apellidosDeNiniosConvertidos = apellidosDeNinios.map((apellido) => {
  return apellido.toLowerCase();
});

// console.log("array viejo", apellidosDeNinios);
// console.log("array nuevo", apellidosDeNiniosConvertidos);

// Filter == Crea un nuevo arreglo a través de un filtrado

// const frutas = ["banana", "Frutilla", "melon", "anana", "fresa", "frambuesa"];

// const frutasConF = frutas.filter((fruta) => {
//   let letraTransformada = fruta[0].toLowerCase();

//   if (letraTransformada === "f") {
//     return fruta;
//   }
// });

// console.log("array de frutas original", frutas);
// console.log("array de frutas con F", frutasConF);

//Array con objetos / API
// const frutas = [
//   {
//     fruta: "Manzana",
//     estacion: "Invierno",
//     tipo: "Aburrida",
//     color: "verde",
//   },
//   {
//     fruta: "Frutilla",
//     estacion: "verano",
//     tipo: "fruto rojo",
//     color: "roja",
//   },
// ];

//API significa “interfaz de programación de aplicaciones”. En el contexto de las API, la palabra aplicación se refiere a cualquier software con una función distinta. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. Este contrato define cómo se comunican entre sí mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los desarrolladores deben estructurar esas solicitudes y respuestas.
