var rangeSliderWrap = document.getElementById("steps-slider-progbar");
var rangeBullets = document.querySelectorAll(".steps-slider__progbar-bullet");
var rangeLine = document.querySelector(".steps-slider__progbar");

var rangeSlider = noUiSlider.create(rangeSliderWrap, {
  start: [6500],
  range: {
    min: 10,
    max: 10000
  },
  step: 1,
  fillClass: "rangeslider__fill",
  behaviour: "drag-tap"
});

var changeCallBack = function() {
  var connect = document.querySelector(".noUi-connects");
  var value = +rangeSlider.get();

  connect.style.width = value * 0.01 + "%";

  document.querySelector(".steps-slider__progbar-bullet span").innerHTML =
    "€" + value;
  document.querySelector(".steps-slider__progbar-bullet span").style.left =
    value / 4.5 + "%";
};

var endCallBack = function() {
  var value = +rangeSlider.get();

  console.log(value);
};

rangeSlider.on("update", changeCallBack);
rangeSlider.on("end", endCallBack);
