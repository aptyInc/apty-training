let countdownTimer;
let countdownTime = 0;

function startCountdown() {
  const inputTime = parseInt(document.getElementById("countdown").value);
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  countdownTime = inputTime;
  document.getElementById(
    "countdownDisplay"
  ).textContent = `Time remaining: ${countdownTime} seconds`;
  countdownTimer = setInterval(() => {
    countdownTime--;
    document.getElementById(
      "countdownDisplay"
    ).textContent = `Time remaining: ${countdownTime} seconds`;
    if (countdownTime <= 0) {
      clearInterval(countdownTimer);
      alert("Time is up!");
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdownTimer);
  document.getElementById("countdownDisplay").textContent =
    "Time remaining: 0 seconds";
  document.getElementById("countdown").value = "";
}

let stopwatchTimer;
let stopwatchTime = 0;

function startStopwatch() {
  if (stopwatchTimer) return; // Prevent multiple intervals

  stopwatchTimer = setInterval(() => {
    stopwatchTime++;
    document.getElementById(
      "stopwatchDisplay"
    ).textContent = `Elapsed time: ${stopwatchTime} seconds`;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
}

function resetStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent =
    "Elapsed time: 0 seconds";
}
