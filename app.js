const bells = new Audio('./achievementBell.wav');
const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
const pauseBtn = document.querySelector('.btn-pause');
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');

let myInterval;
let state = true;
let pauseState = false;
let totalSeconds;

const appTimer = () => {

  //Turns displayed time string into Int, result = 25
  const sessionAmount = Number.parseInt(minuteDiv.textContent);

  if (state) {
    state = false;

    //Executes when clock has never been started
    if (totalSeconds === undefined) {
      totalSeconds = sessionAmount * 60;
    }

    //Logic for changing the displaid time.
    const updateSeconds = () => {
      totalSeconds--;

      let minutesLeft = Math.floor(totalSeconds/60);
      let secondsLeft = totalSeconds % 60;

      //Displays changes displaid time to time remaining
      if(secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
      } else {
        secondDiv.textContent = secondsLeft;
      }

      minuteDiv.textContent = minutesLeft;

      if(minutesLeft === 0 && secondsLeft === 0) {
        bells.play();
        clearInterval(myInterval);
        state = true;
        totalSeconds = undefined;
      }
    }

    myInterval = setInterval(updateSeconds, 1000);

  } else {
    alert('Session has already been started.');
  }
}

const resetTimer = () => {
  state = true;
  clearInterval(myInterval);
  totalSeconds = undefined;

  minuteDiv.textContent = "25";
  secondDiv.textContent = "00";

  console.log("Clear was pressed!");
}

const pauseTimer = () => {
  if (!state) {
    state = true;
    clearInterval(myInterval);

    console.log("Pause was pressed!");
  }
}

startBtn.addEventListener("click", appTimer);
resetBtn.addEventListener("click", resetTimer);
pauseBtn.addEventListener("click", pauseTimer);