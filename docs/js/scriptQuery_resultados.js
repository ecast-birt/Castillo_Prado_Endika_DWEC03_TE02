'use strict';

//-- IMPORTS --
import { Results } from './models/Results.js';




$(document).ready(function() {

    const contenedor = $('#lista-datos');

    //-- Cargamos los datos del SessionStorage
    let partida = Results.cargarDeSesion();

    if (partida) {
                
        contenedor.html(`
            <div class="dato-item"><span>Nivel:</span> <span class="valor">${partida.nivel}</span></div>
            <div class="dato-item"><span>Puntuación:</span> <span class="valor">${partida.puntuacion}</span></div>
            <div class="dato-item"><span>Tiempo Restante:</span> <span class="valor">${partida.tiempo}s</span></div>
            <div class="dato-item"><span>¿Ganado?:</span> <span class="valor">${partida.ganado ? 'Sí 🏆' : 'No ❌'}</span></div>
            <div class="dato-item"><span>Intentos:</span> <span class="valor">${partida.intentos}</span></div>
            <div class="dato-item"><span>Intentos Ganados:</span> <span class="valor">${partida.intentos_ganados}</span></div>
        `);
    } else {
        contenedor.html('<p>No hay datos de partida guardados en esta sesión.</p>');
    }

    //Al reiniciar hay que hacer otras cosas
    $('#btn-reiniciar').click(function() {
        window.location.href = 'bienvenida.html';   
    });
});