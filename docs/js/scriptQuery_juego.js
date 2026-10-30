'use strict';

//-- IMPORTS --
import { Results } from './models/Results.js';


//-- Cargamos los datos del SessionStorage
let datosSession = Results.cargarDeSesion();

//Definimos el tiempo del temporalizador
let tiempo = 5;



const intervalo = setInterval(function() {

    $('#counter').text(tiempo);

    //Comprobamos si el tiempo ha llegado a cero
    if (tiempo <= 0) {
        clearInterval(intervalo); // Detenemos el contador
        alert('¡Se acabó el tiempo!');

        //Actualizamos el sesionStorage
        datosSession.nivel = "Facil";
        datosSession.puntuacion +=0;
        datosSession.intentos +=1;
        datosSession.ganado = false;

        datosSession.guardarEnSesion();

        window.location.href = "resultados.html";


    } else {
        tiempo--; // Restamos uno a la variable
    }
}, 1000);