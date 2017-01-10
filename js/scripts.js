$(function(){
  $("p.toggle-dark").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});

$(function(){
  $("p.toggle-light").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
  });
});
