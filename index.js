// selecting elements
const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

// calculating perimeter of circle and set 'stroke-dasharray' attribute to circle 
const perimeter = 2 * circle.getAttribute("r") * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

// adding an eventListener to clear the input field when click
durationInput.addEventListener("click", () => {
  durationInput.value = "";
});

// duration is the time the timer will tick
let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(timeDuration) {
    duration = timeDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("timer is completed");
  },
});
