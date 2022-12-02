/*
 
 Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

 Generación	Años de nacimiento
 Baby boomer	1949-1968
 Generación X	1969-1980
 Millennials	1981-1993
 Generación Z	1994-2010
 Condicionales van a modificar el flujo de nuestro programa
 
  -----------------------------
  Condiciones de igualdad
  > mayor qué
  >= mayor o igual que
  < menor que
  <= menor o igual que
  != diferente de 
  == igual a
  === estrictamente igual (valor y tipo de dato)
  
  Operdores lógicos:
  && : Evaluar que todas las condiciones sean verdaderas
  || : Evalua que por lo menos alguna condicion sea verdadera


  for ( variable = valor_inicial ; condición_a_evaluar ; incremento ) {
      acción/es a realizar ;
      acción/es a realizar ;
  };
*/

//Función expresada
function functionExpresada() {}

//Función nombrada anónima
const funcionAninoma = function () {};

//Arrow function
const functionFlecha = () => {};

// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:

// Generación	Años de nacimiento
// Baby boomer	1949-1968
// Generación X	1969-1980
// Millennials	1981-1993
// Generación Z	1994-2010
// Condicionales van a modificar el flujo de nuestro programa

// let $parrafo = document.getElementById("parrafo");

// let anio = Number(prompt("¿En qué año naciste?"));

// //Comienza ejercicio
// const obtenerGeneracion = (anioNacimiento) => {
//   if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
//     return "Perteneces a la generación baby boomer";
//   } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
//     return "Perteneces a la Generación X";
//   } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
//     return "Perteneces a la Generación Millennials";
//   } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
//     return `Perteneces a la Generación Z`;
//   } else {
//     return "Para bien o para mal, se desconoce tu generación.";
//   }
// };

// $parrafo.textContent = obtenerGeneracion(anio);

//En JavaScript los bucles (loops) son utilizados para realizar tareas repetitivas con base en una condición. Las condiciones típicamente devuelven true (verdadero) o false (falso) al ser evaluados. El bucle continuará ejecutándose hasta que la condición devuelva false.

//expresión inicial; condicion; incremento o decremento

//Expresión inicial: es el valor de comienzo
//Condición: el bucle se ejecutará hasta que la condición de false
//Incremento o decremento: Le dará dinamismo al bucle

//i = indice
// for (let i = 10; i >= 0; i--) {
//   console.log(`Vuelta numero ${i}`);
// }

// const verTabla = (multiplicador) => {
//   for (let i = 1; i <= 100; i++) {
//     $div.innerHTML += `
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

let $div = document.getElementById("cont-main");

const mostrarNumerosPar = (cantidad) => {
  for (let i = 0; i <= cantidad; i++) {
    if (i % 2 == 0) {
      $div.innerHTML += `
     <div>
      <p>El numero: ${i} es par.</p>
     </div>
     `;
    } else {
      $div.innerHTML += `
     <div>
      <p>El numero: ${i} es inpar.</p>
     </div>
     `;
    }
  }
};

mostrarNumerosPar(200);
