
let countdownTimer;
function startCountdown() {
  const input = document.getElementById("countdownInput").value;
  const countdownDisplay = document.getElementById("countdownDisplay");


  if (!input || input <= 0) {
    countdownDisplay.textContent = "Please enter a valid time.";
    return;
  }

  let timeRemaining = parseInt(input);

  countdownDisplay.textContent = `Time Remaining: ${timeRemaining} seconds`;

  countdownTimer = setInterval(() => {
    timeRemaining--;

    if (timeRemaining <= 0) {
      clearInterval(countdownTimer);
      countdownDisplay.textContent = "Time's up!";
    } else {
      countdownDisplay.textContent = `Time Remaining: ${timeRemaining} seconds`;
    }
  }, 1000);
}

// Stopwatch
let stopwatchTimer;
let elapsedTime = 0;

function startStopwatch() {
  const stopwatchDisplay = document.getElementById("stopwatchDisplay");

  if (!stopwatchTimer) {
    stopwatchTimer = setInterval(() => {
      elapsedTime++;
      stopwatchDisplay.textContent = `Elapsed Time: ${elapsedTime} seconds`;
    }, 1000);
  }
}

function stopStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
}

function resetStopwatch() {
  clearInterval(stopwatchTimer);
  stopwatchTimer = null;
  elapsedTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "Elapsed Time: 0 seconds";
}
