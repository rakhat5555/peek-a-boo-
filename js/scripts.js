$(function() {
  $("p").click(function() {
   $("#initial-hide").toggle();
   $("#initial-show").toggle();
 });
});

$(function() {
  $("p2").click(function() {
   $("#initial-hide-two").toggle();
   $("#initial-show-two").toggle();
 });
});

$(document).ready(function() {
  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("grey-background");
    $("span").removeClass("clickable");
    $("span").removeClass("clickable-yellow");
    $("span").removeClass("clickable-blue");
    $("span").addClass("clickable-grey");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
    $("span").removeClass("clickable");
    $("span").removeClass("clickable-grey");
    $("span").removeClass("clickable-blue");
    $("span").addClass("clickable-yellow");
  });

  $("button#blue").click(function() {
    $("body").removeClass();
    $("body").addClass("blue-background");
    $("span").removeClass("clickable");
    $("span").removeClass("clickable-grey");
    $("span").removeClass("clickable-yellow");
    $("span").addClass("clickable-blue");
  });
});
