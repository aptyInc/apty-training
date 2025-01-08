// Countdown Timer
let countdownTimeout; // Stores the timeout reference for countdown

document.getElementById("startCountdownBtn").addEventListener("click", () => {
  const input = parseInt(document.getElementById("countdownInput").value, 10);
  let timeRemaining = isNaN(input) ? 0 : input;

  const countdownDisplay = document.getElementById("countdownDisplay");
  countdownDisplay.textContent = `Timer: ${timeRemaining}s`;

  clearTimeout(countdownTimeout); // Clear any previous countdowns

  function updateCountdown() {
    if (timeRemaining > 0) {
      timeRemaining--;
      countdownDisplay.textContent = `Timer: ${timeRemaining}s`;
      countdownTimeout = setTimeout(updateCountdown, 1000); // Schedule the next update
    } else {
      countdownDisplay.textContent = "Timer: Time's up!";
    }
  }

  updateCountdown(); // Start the countdown
});

// Stopwatch
let stopwatchInterval = null; // Stores the interval reference for the stopwatch
let stopwatchTime = 0; // Keeps track of elapsed time in seconds

const stopwatchDisplay = document.getElementById("stopwatchDisplay");

document.getElementById("startStopwatchBtn").addEventListener("click", () => {
  if (stopwatchInterval !== null) return; // Prevent multiple intervals

  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    stopwatchDisplay.textContent = `Stopwatch: ${stopwatchTime}s`;
  }, 1000); // Increment time every second
});

document.getElementById("stopStopwatchBtn").addEventListener("click", () => {
  if (stopwatchInterval !== null) {
    clearInterval(stopwatchInterval); // Stop the interval
    stopwatchInterval = null; // Allow restarting
  }
});

document.getElementById("resetStopwatchBtn").addEventListener("click", () => {
  clearInterval(stopwatchInterval); // Stop the interval
  stopwatchInterval = null; // Reset the interval
  stopwatchTime = 0;
  stopwatchDisplay.textContent = `Stopwatch: ${stopwatchTime}s`; // Reset display
});
