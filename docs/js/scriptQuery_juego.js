'use strict';

$(document).ready(function() {
    // 1. Cambiar estado visual al hacer clic en un nivel
    $('.diff-btn').on('click', function() {
        $('.diff-btn').removeClass('active');
        $(this).addClass('active');
    });

    // 2. Al hacer clic en "Comenzar juego", redirigir según el botón activo
    $('#btn-comenzar').on('click', function() {
        const destino = $('.diff-btn.active').data('url');
        
        if (destino) {
            window.location.href = destino;
        }
    });
});