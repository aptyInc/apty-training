// Timer Function: Counts down from 1 minute
function setTimer() {
    let timeLeft = 60;
    const timerElement = document.getElementById("timer");
    timerElement.textContent = "1:00";

    const timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "Time's up!";
        }
    }, 1000);
}

// Stopwatch Function: Counts up to 1 minute
function setStopWatch() {
    let timeElapsed = 0;
    const stopWatchElement = document.getElementById("stop-watch");
    stopWatchElement.textContent = "0:00";

    const stopWatchInterval = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        stopWatchElement.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

        if (timeElapsed >= 60) {
            timeElapsed = 0
        }
    }, 1000);
}