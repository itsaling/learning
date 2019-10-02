// window.addEventListener("load", () => {
//   const preload = document.querySelector(".preload");
//   preload.classList.add("preload-finish");
// });

var enter = document.getElementById("enter");
var write = document.getElementById("write");
var overlay = document.getElementById("morph");
var middlePage =
  "M0 502V0H1441V293.5C1360.5 443 1291.6 585.5 1186 585.5C1054 585.5 882.5 265.5 769.5 265.5C656.5 265.5 496 775.5 330.5 775.5C198.1 775.5 72.8333 547.667 0 502Z";
var bottomPage =
  "M0 1019.5V0H1441V1023C1292.5 1023 1248.6 1019.5 1143 1019.5C1011 1019.5 942 1019.5 829 1019.5C716 1019.5 530 1019.5 364.5 1019.5C232.1 1019.5 105 1019.5 0 1019.5Z";

var morphing = anime({
  targets: ".morph",
  d: [{ value: middlePage }, { value: bottomPage }],
  easing: "easeInOutQuint",
  duration: 1300,
  //   loop: false
  autoplay: false
});

enter.addEventListener("click", function() {
  morphing.restart();
  overlay.classList.add("pointer");
});
