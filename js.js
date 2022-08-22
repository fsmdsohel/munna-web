$(window).scroll(function(){
  $(".fade-one").css("opacity", 1 - $(window).scrollTop() / 200);
});
