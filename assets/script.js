document.addEventListener("DOMContentLoaded", function () {
  var slider = document.getElementById("price-range-slider");
  var output = document.getElementById("price-range-slider-info");
  output.innerHTML = slider.value;

  slider.oninput = function () {
    output.innerHTML = this.value;
  };
});
