//API significa “interfaz de programación de aplicaciones”. En el contexto de las API, la palabra aplicación se refiere a cualquier software con una función distinta. La interfaz puede considerarse como un contrato de servicio entre dos aplicaciones. Este contrato define cómo se comunican entre sí mediante solicitudes y respuestas. La documentación de su API contiene información sobre cómo los desarrolladores deben estructurar esas solicitudes y respuestas.

const URL_API = "https://jsonplaceholder.typicode.com";

//antes de ECS6 - nuevo objeto
const xhr = new XMLHttpRequest();

function onRequestHandler() {
  //validar si la respuesta fue correcta - estado de conexión
  //https://http.cat/
  //0 -> UNSET, no se a llamado al metodo open
  //1 -> OPENED, se a llamado al metodo open
  //2 -> HEADERS_RECEIVED, se esta llamando al método send
  //3 -> LOADING, esta cargando, esta recibiendo la respuesta
  //4 -> DONE, se ha completado la operación
  if (this.readyState === 4 && this.status === 200) {
    const users = JSON.parse(this.response);

    const $container = document.getElementById("main");

    for (let user of users) {
      $container.innerHTML += `
        <h3>${user.name}</h3>
      `;
    }
  }
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${URL_API}/users`);
xhr.send();
