var sneakIndex = 1;
showSneaks(sneakIndex);

// Next/previous controls
function plusSneaks(n) {
  showSneaks(sneakIndex += n);
}

// Thumbnail image controls
function currentSneak(n) {
  showSneaks(sneakIndex = n);
}

function showSneaks(n) {
  var i;
  var sneaks = document.getElementsByClassName("slide-s-screen");
  var dots = document.getElementsByClassName("dot");
  if (n > sneaks.length) {sneakIndex = 1}
  if (n < 1) {sneakIndex = sneaks.length}
  for (i = 0; i < sneaks.length; i++) {
      sneaks[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  sneaks[sneakIndex-1].style.display = "flex";
  dots[sneakIndex-1].className += " active";
}
