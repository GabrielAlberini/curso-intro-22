//SCOPE: El scope puede definirse como el alcance que una variable tendrá en tu código. En otras palabras, el scope decide a qué variables tienes acceso en cada parte del código. Existen dos tipos de scope, el scope global y el scope local.

//HOISTING:  El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución).

// Generalmente todo lo que sucede en un lenguaje de programación, sucede en una función.
// Es un bloque de codigo autocontenido y que tiene su propio scope.
// Se declara una vez y se puede reutilizar las veces que quieras.

//Palabra reservada, nombre de función (acción), parentesis, llaves.
//Las funciones tienen scope (alcance) de bloque. Es determinado por las llaves

// let nick = prompt("¿Cuál es tu nombre?");
// let estadoDeAnimo = prompt("¿Cuál es tu estado de ánimo?");

function saludar(nombre, animo) {
  console.log(
    `Hola, como estas, ${nombre}? ¿Cómo te encuentras hoy?. Hoy me encuentro ${animo}.`
  );
  console.log("Me encanta mi nombre " + nombre);
}

saludar("Grace", "increiblemente bien me encanta Javascript, ¡que emoción!");

// PARAMETROS: Nombre de las variables que requiere la función
// ARGUMENTOS: Valores que recibe la función cuando esta es invocada o ejecutada.

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

// document.write(sumar(400, 600));

//Crear una función convertirHorasEnSegundos que tome como argumento un número de horas y devuelva la conversión a segundos de dicha cantidad de horas

let numeroDeHoras = Number(prompt("Indica la cantidad de horas"));

function convertirHorasEnSegundos(horas) {
  let resultado = horas * 3600;
  let mensaje = `El resultado de la conversión de ${horas}hs a segundos es de: ${resultado}s.`;
  return mensaje;
}

console.log(convertirHorasEnSegundos(numeroDeHoras));
