// timer class
class Timer {
  constructor(durationInput, startBtn, pauseBtn, callbacks) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener("click", this.start);
    this.pauseBtn.addEventListener("click", this.pause);
  }

  // start function
  start = () => {
    if (this.onStart) {
      this.onStart(this.timeRemaining);
    }
    this.tick();
    this.interval = setInterval(this.tick, 50);
  };

  // pause function
  pause = () => {
    clearInterval(this.interval);
  };

  // tick function
  tick = () => {
    if (this.timeRemaining <= 0) {
      if (this.onComplete) {
        this.onComplete();
      }
      this.pause();
    } else {
      this.timeRemaining = this.timeRemaining - 0.05;
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  };

  // get remaining time
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  // set remaining time
  set timeRemaining(time) {
    this.durationInput.value = time.toFixed(2);
  }
}
