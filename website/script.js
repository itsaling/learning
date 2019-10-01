var topPage =
  "M0 9V0H1441V9C1308.5 9 1223.6 9 1118 9C986 9 868.5 9 755.5 9C642.5 9 442.5 9 277 9C144.6 9 88 9 0 9Z";
var middlePage =
  "M0 502V0H1441V293.5C1360.5 443 1291.6 585.5 1186 585.5C1054 585.5 882.5 265.5 769.5 265.5C656.5 265.5 496 775.5 330.5 775.5C198.1 775.5 72.8333 547.667 0 502Z";
var bottomPage =
  "M0 1019.5V0H1441V1023C1292.5 1023 1248.6 1019.5 1143 1019.5C1011 1019.5 942 1019.5 829 1019.5C716 1019.5 530 1019.5 364.5 1019.5C232.1 1019.5 105 1019.5 0 1019.5Z";

var btn = document.getElementById("btn-click");
var btn2 = document.getElementById("btn2-click");
var sect1 = document.getElementById("sect1");
var sect2 = document.getElementById("sect2");
var overlay = document.getElementById("morph");

var morphing = anime({
  targets: ".morph",
  d: [{ value: middlePage }, { value: bottomPage }],
  easing: "easeInOutQuint",
  duration: 1300,
  loop: false,
  autoplay: false
});

btn.addEventListener("click", function() {
  morphing.restart();
  overlay.classList.add("pointer");

  sect2.classList.add("animated", "display", "flipInY", "delay-1s");
});

btn2.addEventListener("click", function() {
  morphing.reverse();
  morphing.play();

  overlay.classList.remove("pointer");
  sect2.classList.remove("animated", "display", "flipInY", "delay-1s");
});
