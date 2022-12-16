// // fetch

// /**
//  * Metodo propio de JS para  enviar un pedido y obtener información del servidor
//  * Conectarnos con otras aplicaciones, bases de datos o servidores
//   let variable = fecth(url)
//  Metodos: GET, POST, PUT, DELETE
//  let pokemon = fetch('https://pokeapi.co/pokemons');
//  then(callback): Se ejecuta cuando es satisfactoria la respuesta
//  catch(callback): Se ejecuta cuando existe un error
// */

const $container = document.getElementById("container");

const URL_API = "https://randomuser.me/api/";

const user = fetch(URL_API);

user
  .then((respuesta) => respuesta.json())
  .then((datosRecibidos) => {
    const user = datosRecibidos.results["0"];

    console.log(user);

    $container.innerHTML = `
      <img src="${user.picture.medium}" alt="" />
    `;
  });
