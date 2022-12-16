// const $boton = document.getElementById("boton");
// const $contenedor = document.getElementById("contenedor");

// const URL_API = "https://jsonplaceholder.typicode.com";

// const xhttp = new XMLHttpRequest();

// const traerDatos = () => {
//   //Mostrar en consola la nueva intancia
//   console.log(xhttp);

//   //0 -> UNSET, no se a llamado al metodo open
//   //1 -> OPENED, se a llamado al metodo open
//   //2 -> HEADERS_RECEIVED, se esta llamando al método send
//   //3 -> LOADING, esta cargando, esta recibiendo la respuesta
//   //4 -> DONE, se ha completado la operación

//   xhttp.open("GET", `${URL_API}/users`);
//   xhttp.send();

//   xhttp.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       //Respuesta antes de convertirla
//       console.log(typeof this.response);

//       //Respuesta parseada (convertida a array)
//       console.log(JSON.parse(this.response));

//       //Guardo en variable los usuarios parseados
//       const users = JSON.parse(this.response);

//       for (let user of users) {
//         $contenedor.innerHTML += `<p>${user.name}</p>`;
//       }
//     }
//   };
// };

// $boton.addEventListener("click", traerDatos);
