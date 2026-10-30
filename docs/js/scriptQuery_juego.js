'use strict';

//-- IMPORTS --
import { Results } from './models/Results.js';


console.log("JS juego cargado")

//-- Cargamos los datos del SessionStorage
let datosSession = Results.cargarDeSesion();

//Definimos el tiempo del temporalizador
let tiempo = 30;



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

$(document).ready(function () {

    // --- 1. GESTIÓN DEL ARRASTRE (DRAG) ---

    // Al iniciar el arrastre desde el retrato
    $('.retrato-sospechoso').on('dragstart', function (e) {
        const $retrato = $(this);
        $retrato.addClass('dragging');

        // Extraer id y ruta de imagen
        const idSospechoso = $retrato.closest('.tarjeta-sospechoso').data('id');
        const rutaImagen = $retrato.find('img').attr('src');
        const nombreSospechoso = $retrato.siblings('.info-sospechoso').find('.nombre-sospechoso').text();

        // Empaquetar datos para transferir
        const payload = JSON.stringify({
            id: idSospechoso,
            src: rutaImagen,
            nombre: nombreSospechoso
        });

        // En jQuery se accede al evento nativo mediante originalEvent
        e.originalEvent.dataTransfer.setData('application/json', payload);
        e.originalEvent.dataTransfer.effectAllowed = 'copy';
    });

    // Al finalizar el arrastre (haya caído o se haya cancelado)
    $('.retrato-sospechoso').on('dragend', function () {
        $(this).removeClass('dragging');
    });


    // --- 2. GESTIÓN DE LAS ZONAS DE DESTINO EN LA CUADRÍCULA (DROP) ---

    // Necesario prevenir el comportamiento por defecto para permitir soltar
    $('#contenedor-matriz').on('dragover', '.celda-drop', function (e) {
        e.preventDefault();
        e.originalEvent.dataTransfer.dropEffect = 'copy';
    });

    // Retroalimentación visual al pasar por encima
    $('#contenedor-matriz').on('dragenter', '.celda-drop', function (e) {
        e.preventDefault();
        $(this).addClass('drag-over');
    });

    // Retirar retroalimentación visual al salir
    $('#contenedor-matriz').on('dragleave', '.celda-drop', function () {
        $(this).removeClass('drag-over');
    });

    // Evento de soltar (drop)
    $('#contenedor-matriz').on('drop', '.celda-drop', function (e) {
        e.preventDefault();
        const $celda = $(this);
        $celda.removeClass('drag-over');

        // Recuperar datos transferidos
        const rawData = e.originalEvent.dataTransfer.getData('application/json');
        if (!rawData) return;

        const data = JSON.parse(rawData);

        // Estampar la imagen del sospechoso en la celda
        $celda.html(`
            <div class="sospechoso-asignado" data-id="${data.id}" title="${data.nombre}">
                <img src="${data.src}" alt="${data.nombre}">
                <button type="button" class="btn-quitar" title="Eliminar asignación">&times;</button>
            </div>
        `);
    });

    // Permitir retirar un sospechoso colocado pulsando la cruz
    $('#contenedor-matriz').on('click', '.btn-quitar', function (e) {
        e.stopPropagation();
        $(this).closest('.sospechoso-asignado').remove();
    });

});