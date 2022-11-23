//Comentario de una sola linea

/*
Hola
Soy
un 
comentario de muchas
lineas
*/

//Variables
//Declaración
// var saludo; No se usa tanto (se está dejando de usar)
// let nombre; Se usa siempre
// const apellido = ""; Constante, es un tipo de constante que no puede cambiar

//Inicializar
// nombre = "Gabriel";

// let edad = 28;

//Console.log() es una herramienta de desarrollo para ir inspeccionando datos
// console.log(edad);

//Tipos de datos en Javascript

//String
// let nombre = "Dora";
//String entre comillas simples
// let apellido = "Ubuaf";
//Escrir texto con comillas en Js
// let apodo = "Hola, me dicen 'gabo'";

//Number
// let edad = 15;
// let altura = 1.72;
// let gradosQueNoMeGustan = -10;

//Booleano
// let meGustaElFrio = false;
// let meGustaElCalor = true;

//undefinded
// let desconocido = undefined;
// let gustoDeHelado;

// console.log(gustoDeHelado);

//null
// let numeroCero = null;
// console.log(numeroCero);

//NaN - Not a number
//Da como resultado de una operación que no es numérica

// let resultadoNaN = nombre * edad;
// console.log("Acá el resultado de NaN: " + resultadoNaN);

//Concatenar
// console.log(
//   "Hola" +
//     " " +
//     nombre +
//     " " +
//     apellido +
//     "." +
//     " " +
//     "Tengo " +
//     edad +
//     " " +
//     "años."
// );

//Back Sticks
// console.log(
//   `Hola, mi nombre es: ${nombre} y mi apellido es ${apellido}. Tengo ${edad} años.`
// );

// let resultado = 123123123;

// let numeroUno = 1231636;
// let numeroDos = 2345634;

// resultado = numeroUno + numeroDos;

// console.log("Resultado es igual a: " + resultado);

//Operaciones

/*
+ suma
- resta
/ división
* multiplicación
% resto
*/

//Módulo
// let esPar = 9 % 3;
// console.log(esPar);

//Pido al usuario 2 numero mediante el prompt. El prompt siempre guarda string
// Convierto el string que guarda el prompt a número
// Guardo ese numero en cada variable
// let numUno = Number(prompt("Indica el primer número"));
// let numDos = Number(prompt("Indica el segundo número"));

//Vemos el tipo de dato (string, boolean, number, undefined)
// console.log(typeof numUno);
// console.log(typeof numDos);

//Guardamos en una variable el resultado de la suma de numUno y numDos
// let resultadoSuma = numUno + numDos;

//Mostramos por consola tal resultado
// console.log(resultadoSuma);

// let fname = prompt("Diga su nombre aquí");
// let surname = prompt("Diga su apellido");

// console.log(`Hola ${fname} ${surname}, bienvenida a Ada`);

//Crear un programa que pida ingresar una edad y devuelva el equivalente de esas edad en años perro.

// let edadDelPerrito = Number(prompt("Indica la edad del perro en años humanos"));

// let edadEnAñoPerruno = edadDelPerrito * 7;

// console.log(
//   `Esta es la edad de tu perro en años de perro: ${edadEnAñoPerruno}.`
// );

//Crear un programa que pida al usuario ingresar un número, y luego el porcentaje que se desea obtener del mismo. Devolver un mensaje muestre el porcentaje de dicho número.

// let numero = Number(prompt("Indica el numero"));
// let porcentaje = Number(prompt("Indica el porcentaje"));

// let resultadoPorcentaje = (numero * porcentaje) / 100;

// console.log(`El ${porcentaje}% de ${numero} es: ${resultadoPorcentaje}`);

//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit

// let gradosCelsius = Number(prompt("Indica la tempetarura en grados Celsius"));

// let resultadoFar = gradosCelsius * 32;

// console.log(`La conversión a grados °F es de: ${resultadoFar}°F`);
