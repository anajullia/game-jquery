// Código do movimento

$(document).ready(function() {
    var velocidade = 2;
    
    $("#btum").mousedown(function() {
      var interval = setInterval(function() {
        $("#playerimg").css("top", "-=" + velocidade + "px");
      }, 10);
      
      $(this).data('interval', interval);
    }).mouseup(function() {
      clearInterval($(this).data('interval'));
    });
    
    $("#btdois").mousedown(function() {
      var interval = setInterval(function() {
        $("#playerimg").css("top", "+=" + velocidade + "px");
      }, 10);
      
      $(this).data('interval', interval);
    }).mouseup(function() {
      clearInterval($(this).data('interval'));
    });
    
    $("#bttres").mousedown(function() {
      var interval = setInterval(function() {
        $("#playerimg").css("left", "-=" + velocidade + "px");
      }, 10);
      
      $(this).data('interval', interval);
    }).mouseup(function() {
      clearInterval($(this).data('interval'));
    });
    
    $("#btquatro").mousedown(function() {
      var interval = setInterval(function() {
        $("#playerimg").css("left", "+=" + velocidade + "px");
      }, 10);
      
      $(this).data('interval', interval);
    }).mouseup(function() {
      clearInterval($(this).data('interval'));
    });
  });
  