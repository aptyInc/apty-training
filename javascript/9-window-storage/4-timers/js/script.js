 // Countdown Timer
 function startCountdown() {
    let time = parseInt(document.getElementById("countdownInput").value);
    const display = document.getElementById("countdown");

    if (isNaN(time) || time <= 0) {
      alert("Enter a valid number of seconds!");
      return;
    }

    function updateCountdown() {
      if (time > 0) {
        display.textContent = `00:${String(time).padStart(2, "0")}`;
        time--;
        setTimeout(updateCountdown, 1000);
      } else {
        display.textContent = "Time's up!";
      }
    }

    updateCountdown();
  }

  // Stopwatch
  let stopwatchTime = 0;
  let stopwatchInterval;

  function startStopwatch() {
    if (!stopwatchInterval) {
      stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById("stopwatch").textContent = `00:${String(stopwatchTime).padStart(2, "0")}`;
      }, 1000);
    }
  }

  function stopStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
  }

  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    document.getElementById("stopwatch").textContent = "00:00";
  }