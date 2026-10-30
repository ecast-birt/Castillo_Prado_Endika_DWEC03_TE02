'use strict';

//la manera de intancis con jquery $poner que see intancia, el callback y el codigo


$(document).ready(function(){
    console.log("JQuery Cargado correctamente")
});

//Importando cosas
import { UserPass } from './models/UserPass.js';
import { USER_DB } from './data/user.data.js';


console.log("USER_DB cargado correctamente:", USER_DB);

const regexAlfanumerico = /^[a-zA-Z0-9]+$/;

$('#btn-login').on('click', function () {
  const user = $('#username').val().trim();
  const pass = $('#password').val().trim();
  const $feedback = $('#mensaje-estado');

//Vamos a probar las diferentes validaciones
// 1. Validación de campos vacíos
  if (!user || !pass) {
    mostrarError($feedback, 'Por favor, completa todos los campos.');
    return;
  }

  // 2. Validación de formato de la contraseña mediante expresión regular
  if (!regexAlfanumerico.test(pass)) {
    mostrarError($feedback, 'Formato inválido: la contraseña solo puede contener letras y números.');
    return;
  }

  // 3. Validación de usuario contra la "base de datos"
  const usuarioEncontrado = USER_DB.find(u => u.usuario === user);
  if (!usuarioEncontrado) {
    mostrarError($feedback, 'El usuario no existe.');
    return;
  }

  // 4. Validación de contraseña correcta
  if (usuarioEncontrado.contraseña !== pass) {
    mostrarError($feedback, 'Contraseña incorrecta.');
    return;
  }

  // 5. Todo correcto -> Estilo verde y redirección o acceso concedido.al ser algo de la funcion la hago aqui directamente
  $feedback.css({
    'background-color': '#d4edda',
    'color': '#155724',
    'border': '1px solid #c3e6cb'
  }).text('Credenciales correctas. Entrando...');

  // Si necesitas pasar a la siguiente página (bienvenida o juego):
  window.location.href = "bienvenida.html";
});

// Función auxiliar para aplicar el recuadro rojo
function mostrarError($elemento, mensaje) {
  $elemento.css({
    'background-color': '#f8d7da',
    'color': '#721c24',
    'border': '1px solid #f5c6cb'
  }).text(mensaje);
}  


/*
//Vamos a crear una funcion para validar el login, que se va a llamar validarLogin, que va a recibir como parametros el usuario y la contraseña, y va a devolver true si el usuario y la contraseña son correctos, y false si no lo son
function validarLogin(usuario, contraseña) {
    //Vamos a recorrer el array USER_DB con un forEach, y vamos a comprobar si el usuario y la contraseña son correctos
    let isValid = false;

    USER_DB.forEach(user => {
        if (user.usuario === usuario && user.contraseña === contraseña) {
            isValid = true;
        }
    });
    return isValid;
}
    */