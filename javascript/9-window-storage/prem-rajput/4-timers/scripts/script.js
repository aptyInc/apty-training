const countdownInput = document.getElementById("countdownInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

let countdownTimer,
    stopwatchTimer,
    elapsed = 0;

document.getElementById("startCountdown").onclick = () => {
    clearInterval(countdownTimer);
    let time = parseInt(countdownInput.value) || 0;
    countdownTimer = setInterval(() => {
        countdownDisplay.textContent =
            time > 0 ? `Time Remaining: ${time--}` : "Time's up!";
        if (time < 0) clearInterval(countdownTimer);
    }, 1000);
};

document.getElementById("startStopwatch").onclick = () => {
    if (!stopwatchTimer) {
        stopwatchTimer = setInterval(() => {
            stopwatchDisplay.textContent = `Elapsed Time: ${++elapsed} seconds`;
        }, 1000);
    }
};

document.getElementById("stopStopwatch").onclick = () => {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
};

document.getElementById("resetStopwatch").onclick = () => {
    clearInterval(stopwatchTimer);
    stopwatchTimer = null;
    elapsed = 0;
    stopwatchDisplay.textContent = "Elapsed Time: 0 seconds";
};
