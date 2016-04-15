function showDialog(){
    $('.wrap, .glyphicon-plus').toggleClass('active');
    $('#blurizable').toggleClass('blur-backgorund change-style-blur');
    return false;
  }

function detailToBackButton(e) {

}

function setUpUI() {
  $('.ui.rating')
    .rating({
      initialRating: 0,
      maxRating: 5
   });
}



  //window.onload = showDialog;
