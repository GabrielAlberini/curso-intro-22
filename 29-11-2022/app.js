// function saludar(nombre) {
//   console.log(`Hola, ${nombre}, como estas?`);
// }

// const saludar = function (nombre) {
//   console.log(`Hola, ${nombre}, como estas?`);
//   return `Hola, ${nombre}, como estas?`;
// };

// let nombreParaFuncion = saludar("Clara");

// saludar("Gabriel");

// console.log(nombreParaFuncion);

// const sumar = function (num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// };

// const mostrarPorConsola = function (resultado) {
//   console.log(`El resultado fue ${resultado}`);
// };

// const mostrarPorAlerta = function (resultado) {
//   alert(`El resultado fue ${resultado}`);
// };

// mostrarPorConsola(sumar(20, 1000));
// mostrarPorAlerta(sumar(10, 20));

// Condicional if: Ejecuta una sentencia si una condición específicada es evaluada como verdadera. Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada.

// let color = prompt("¿De qué color está el semáforo?");

//El nombre reservado para la función.
//Condición que será evaluada
//Sentencia

// if (color === "verde") {
//   console.log("El color del semáforo está en verde, puedes pasar");
// } else if (color === "amarillo") {
//   console.log("El color del semáforo está en amarillo, ten precaución");
// } else if (color === "rojo") {
//   console.log("El color del semáforo está en rojo, no puedes pasar");
// } else {
//   console.log("El color del semáforo, es incorrecto.");
// }

// const determinarEdad = function (edad) {
//   if (edad > 17) {
//     console.log(`Puedes pasar, sos mayor de edad. Tu edad es ${edad} años.`);
//   } else {
//     console.log(
//       `No puedes ingresar, sos menor de edad. Tu edad es ${edad} años.`
//     );
//   }
// };

// determinarEdad(12);
// determinarEdad(18);
// determinarEdad(11);
// determinarEdad(76);
// determinarEdad(220);

// Operadores lógicos
// OR, AND

//AND -> &&
//OR -> ||

//Gabo, hace un programa que además de evaluar la edad, vea si el invitado
//tiene una entrada.

// let edad = Number(prompt("¿Cuál es tu edad?"));

// const validarEntrada = function (edad, entrada) {
//   //Las dos condiciones tienen que dar true.
//   //edad -> true. Porque es mayor a 18
//   //entrada -> true. Porque tiene una entrada

//   if (edad >= 18 && entrada === true) {
//     console.log(`Puedes pasar, sos mayor de edad. Tu edad es ${edad} años.`);
//   } else if (edad >= 18 || entrada === false) {
//     console.log("Eres mayor de edad, pero no tienes entrada. Lo lamento :(");
//   } else {
//     console.log("No eres mayor de edad :(");
//   }
// };

// validarEntrada(24, false);
// validarEntrada(19, true);
// validarEntrada(20, true);
// validarEntrada(2, true);
// validarEntrada(12, true);

// const validarColorSemaforo = function (color) {
//   if (color === "amarillo" || color === "rojo" || color === "bordo") {
//     console.log("No puedes pasar");
//   } else if (color === "verde") {
//     console.log("Puedes pasar");
//   }
// };

// validarColorSemaforo("verde");
// validarColorSemaforo("amarillo");
// validarColorSemaforo("rojo");
// validarColorSemaforo("bordo");
