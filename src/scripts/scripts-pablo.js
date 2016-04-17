function showDialog() {
    $('#dialog-mat').toggleClass('position-changed');
    $('.wrap').toggleClass('active'); //Activar y desactivar el dialog
    $('#blurizable').toggleClass('blur-backgorund change-style-blur'); //Activar y desactivar el fondo oscuro tras el dialog
    $('.boton-de-radio').prop('checked', false); //Desmarcar los radio-button de añadir tarea al pulsar Aceptar o Cancelar
    $("#form-anaerobico").hide();
    $("#form-aerobico").hide();
    $(".breadcrumb").show();

    $('html, body').animate({
        scrollTop: $("#dialog-mat").offset().top - 150
    }, 250);

    return false;
}

function radioClicked(e) {
    if (e.value == "1") {
        $(".breadcrumb").hide();
        $("#form-anaerobico").hide();
        $("#form-aerobico").show();
    }
    if (e.value == "2") {
        $(".breadcrumb").hide();
        $("#form-aerobico").hide();
        $("#form-anaerobico").show();
    }
}

function setUpUI() {
    $('.ui.rating')
        .rating({
            initialRating: 0,
            maxRating: 5
        });
}



//window.onload = showDialog;
