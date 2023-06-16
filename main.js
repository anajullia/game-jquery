$(document).ready(function() {
    $("#btum").click(function() {
      $("#playerimg").animate({ top: "-=50px" }, 500);
    });
  
    $("#btdois").click(function() {
      $("#playerimg").animate({ top: "+=50px" }, 500);
    });
  
    $("#bttres").click(function() {
      $("#playerimg").animate({ left: "-=50px" }, 500);
    });
  
    $("#btquatro").click(function() {
      $("#playerimg").animate({ left: "+=50px" }, 500);
    });
  });
  