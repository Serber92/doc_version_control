$(document).ready(function(){

  var socket = io();

  $('#new_doc_button').click(function(){
    var name = $('#name').val();
    socket.emit('new_doc', {name: name});
    $("#mainBody").html("");
  });

});