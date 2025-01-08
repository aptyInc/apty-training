let countdownInterval;
function startCountdown() {
  let time = document.getElementById("countdownTime").value;
  document.getElementById("countdownDisplay").textContent = time;

  clearInterval(countdownInterval);
  countdownInterval = setInterval(function () {
    time--;
    document.getElementById("countdownDisplay").textContent = time;
    if (time <= 0) {
      clearInterval(countdownInterval);
      alert("Countdown finished!");
    }
  }, 1000);
}

let stopwatchInterval;
let stopwatchTime = 0;
function startStopwatch() {
  stopwatchInterval = setInterval(function () {
    stopwatchTime++;
    document.getElementById("stopwatchDisplay").textContent = stopwatchTime;
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = stopwatchTime;
}
