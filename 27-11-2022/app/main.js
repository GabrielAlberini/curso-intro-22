// La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case , y ejecuta declaraciones asociadas a ese case , así como las declaraciones en los case que siguen.

const $txtHuman = document.getElementById("human");
const $txtPc = document.getElementById("pc");
const $result = document.getElementById("result");
const $container = document.getElementById("container");

let pc;
let movPc;
let movHuman;

const randomChoicePc = () => {
  return Math.floor(Math.random() * 3) + 1;
};

pc = randomChoicePc();

// if (pc === 1) {
//   movPc = "piedra";
// } else if (pc === 2) {
//   movPc = "papel";
// } else {
//   movPc = "tijera";
// }

switch (pc) {
  case 1:
    movPc = "piedra";
    break;
  case 2:
    movPc = "papel";
    break;
  case 3:
    movPc = "tijera";
    break;
  default:
    movPc = "Debes ingresar un opción real";
}

const humanChoice = Number(
  prompt("¿Que opción eliges: \n 1 - Piedra \n 2 - Papel \n 3 - Tijera?")
);

if (humanChoice === 1) {
  movHuman = "piedra";
} else if (humanChoice === 2) {
  movHuman = "papel";
} else if (humanChoice === 3) {
  movHuman = "tijera";
} else {
  movHuman = "Movimiento incorrecto";
}

if (movHuman === "piedra" || movHuman === "papel" || movHuman === "tijera") {
  console.log(`La compu eligio: ${movPc}, el humano eligio ${movHuman}`);
  if (movPc === movHuman) {
    $txtHuman.innerText = `El humano eligió ${movHuman}`;
    $txtPc.innerText = `La compu eligió ${movPc}`;
    $result.innerText = "Empate";
  } else if (
    (movPc === "piedra" && movHuman === "tijera") ||
    (movPc === "papel" && movHuman === "piedra") ||
    (movPc === "tijera" && movHuman === "papel")
  ) {
    $txtHuman.innerText = `El humano eligió ${movHuman}`;
    $txtPc.innerText = `La compu eligió ${movPc}`;
    $result.innerText = "Gana la compu";
    // $container.style.backgroundColor = "rgb(228, 99, 99)";
    $container.classList.add("lost");
  } else {
    $txtHuman.innerText = `El humano eligió ${movHuman}`;
    $txtPc.innerText = `La compu eligió ${movPc}`;
    $result.innerText = "Gana el humano";
    $container.classList.add("win");
  }
} else {
  console.log("Debes ingresar una opción correcta");
}
