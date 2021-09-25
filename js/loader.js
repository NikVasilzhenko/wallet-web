$(document).ready(function() {
  $("body").css("overflow", "hidden");
});

$(window).load(function() {
  $(".loader").addClass("loader--disappear");

  setTimeout(() => {
    $("body").css("overflow", "visible");
    $(".loader").remove();
  }, 2000);
});
