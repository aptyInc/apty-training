let countdownInterval;
let countdownTime = 10;

function startCountdown() {
  countdownTime = parseInt(document.getElementById("countdownInput").value);
  document.getElementById(
    "countdownDisplay"
  ).textContent = `Time Left: ${countdownTime}s`;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => {
    countdownTime--;
    document.getElementById(
      "countdownDisplay"
    ).textContent = `Time Left: ${countdownTime}s`;
    if (countdownTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdownDisplay").textContent = "Time's Up!";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  countdownTime = parseInt(document.getElementById("countdownInput").value);
  document.getElementById(
    "countdownDisplay"
  ).textContent = `Time Left: ${countdownTime}s`;
}

let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    document.getElementById(
      "stopwatchDisplay"
    ).textContent = `Time: ${stopwatchTime}s`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById(
    "stopwatchDisplay"
  ).textContent = `Time: ${stopwatchTime}s`;
}
