let countdownInterval;
document.getElementById("startCountdown").addEventListener("click", function() {
  clearInterval(countdownInterval);
  let timeLeft = parseInt(document.getElementById("countdownInput").value, 10);
  document.getElementById("countdownDisplay").textContent = "Time left: " + timeLeft + "s";
  countdownInterval = setInterval(function() {
    timeLeft--;
    document.getElementById("countdownDisplay").textContent = "Time left: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("countdownDisplay").textContent = "Time's up!";
    }
  }, 1000);
});
let stopwatchInterval;
let stopwatchTime = 0;
document.getElementById("startStopwatch").addEventListener("click", function() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(function() {
    stopwatchTime++;
    document.getElementById("stopwatchDisplay").textContent = stopwatchTime + "s";
  }, 1000);
});
document.getElementById("stopStopwatch").addEventListener("click", function() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
});
document.getElementById("resetStopwatch").addEventListener("click", function() {
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "0s";
});
