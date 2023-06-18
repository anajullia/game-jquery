$(document).ready(function() {
    $("#btum").mousedown(function() {
      $("#playerimg").animate({ top: "-=50px" }, 500);
    });

  $("#btdois").mousedown(function() {
    $("#playerimg").animate({ top: "+=50px" }, 500);
  });

  $("#bttres").mousedown(function() {
    $("#playerimg").animate({ left: "-=50px" }, 500);
  });

  $("#btquatro").mousedown(function() {
    $("#playerimg").animate({ left: "+=50px" }, 500);
  });
})