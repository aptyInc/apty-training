let countdownInterval;
let countdownTime = 0;

function startCountdown() {
  const input = document.getElementById("timerInput").value;
  countdownTime = parseInt(input, 10) || 0;
  if (countdownTime <= 0) {
    document.getElementById("countdownOutput").textContent = "Please enter a valid number!";
    return;
  }
  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    if (countdownTime > 0) {
      document.getElementById("countdownOutput").textContent = `Time Left: ${countdownTime} seconds`;
      countdownTime--;
    } else {
      clearInterval(countdownInterval);
      document.getElementById("countdownOutput").textContent = "Time's Up!";
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  document.getElementById("countdownOutput").textContent = "Time Left: --";
  document.getElementById("timerInput").value = "";
}

let stopwatchInterval;
let elapsedMilliseconds = 0;
let isRunning = false;

function startStopwatch() {
  if (isRunning) return; 
  isRunning = true;
  stopwatchInterval = setInterval(() => {
    elapsedMilliseconds += 1000;
    const hours = Math.floor(elapsedMilliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedMilliseconds % (1000 * 60)) / 1000);
    document.getElementById("stopwatchOutput").textContent = `Elapsed Time: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  }, 1000);
}

function pauseStopwatch() {
  isRunning = false;
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(stopwatchInterval);
  elapsedMilliseconds = 0;
  document.getElementById("stopwatchOutput").textContent = "Elapsed Time: 00:00:00";
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}