// Countdown Timer
let timerInterval;
document.getElementById("start-timer-btn").addEventListener("click", () => {
  clearInterval(timerInterval);
  const seconds = parseInt(document.getElementById("timer-input").value, 10);
  if (isNaN(seconds) || seconds <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  let timeRemaining = seconds;
  document.getElementById(
    "timer-display"
  ).textContent = `Timer: ${timeRemaining}s`;

  timerInterval = setInterval(() => {
    timeRemaining--;
    document.getElementById(
      "timer-display"
    ).textContent = `Timer: ${timeRemaining}s`;
    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
    }
  }, 1000);
});

// Stopwatch
let stopwatchInterval;
let stopwatchTime = 0;
document.getElementById("start-stopwatch-btn").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    document.getElementById(
      "stopwatch-display"
    ).textContent = `Stopwatch: ${stopwatchTime}s`;
  }, 1000);
});

document.getElementById("stop-stopwatch-btn").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
});

document.getElementById("reset-stopwatch-btn").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatch-display").textContent = `Stopwatch: 0s`;
});
