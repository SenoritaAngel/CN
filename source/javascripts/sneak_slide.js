var sneakIndex = 1;
showSneaks(sneakIndex);

// Next/previous controls
function plusSneak(n) {
  showSneaks(sneakIndex += n);
}

// Thumbnail image controls
function currentSneak(n) {
  showSneaks(sneakIndex = n);
}

function showSneaks(n) {
  var i;
  var sneaks = document.getElementsByClassName("slide-s-screen");
  var bullets = document.getElementsByClassName("bullet");
  if (n > sneaks.length) {sneakIndex = 1}
  if (n < 1) {sneakIndex = sneaks.length}
  for (i = 0; i < sneaks.length; i++) {
      sneaks[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i++) {
      bullets[i].className = bullets[i].className.replace(" active", "");
  }
  sneaks[sneakIndex-1].style.display = "flex";
  bullets[sneakIndex-1].className += " active";
}

/*$(document).ready(function(){
  // Activate Carousel
  $("#myCarousel").carousel({interval: 1500});

  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function(){
    $("#myCarousel").carousel(2);
  });
  $(".item4").click(function(){
    $("#myCarousel").carousel(3);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
    $("#myCarousel").carousel("prev");
  });
  $(".right").click(function(){
    $("#myCarousel").carousel("next");
  });
});*/
