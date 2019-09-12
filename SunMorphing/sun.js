const moonPath =
  "M15 26C15 41.1878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 15 10.8122 15 26Z";

const sunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const darkMode = document.querySelector("#darkMode");

let textD = document.getElementById("textD");
let toggle = false;

//click the sun
darkMode.addEventListener("click", () => {
  //animate js
  //here we set up the timeline
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo"
  });
  //add animation to the timeline
  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? sunPath : moonPath }]
    })

    .add(
      {
        targets: "#darkMode",
        rotate: toggle ? 120 : 320
      },
      "-= 350"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
      },
      "-= 700"
    );

  //everytime we click on the sun switch the toggle to true to tfale
  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
