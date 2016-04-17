function showDialog(){
    let h = $('#dialog-mat-content').outerHeight();
    $('#dialog-mat').height(h);
    $('.wrap').toggleClass('active'); //Activar y desactivar el dialog
    $('#blurizable').toggleClass('blur-backgorund change-style-blur'); //Activar y desactivar el fondo oscuro tras el dialog
    $('.boton-de-radio').prop('checked', false); //Desmarcar los radio-button de añadir tarea al pulsar Aceptar o Cancelar
    $("#form-anaerobico").hide();
    $("#form-aerobico").hide();
    $(".breadcrumb").show();
    return false;
  }

function radioClicked(e){
  if(e.value=="option1"){
      $(".breadcrumb").hide();
      $("#form-anaerobico").hide();
      $("#form-aerobico").show();
  }
  if(e.value=="option2"){
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
