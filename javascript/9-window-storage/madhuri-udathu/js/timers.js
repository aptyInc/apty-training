const countdownInput = document.getElementById('countdownInput');
const countdownDisplay = document.getElementById('countdownDisplay');
const startCountdownButton = document.getElementById('startCountdown');
let countdownTimeout;

function startCountdown() {
    let timeLeft = parseInt(countdownInput.value);

    if (isNaN(timeLeft) || timeLeft <= 0) {
        countdownDisplay.textContent = 'Please enter a valid number!';
        return;
    }

    function updateCountdown() {
        countdownDisplay.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft > 0) {
            timeLeft--;
            countdownTimeout = setTimeout(updateCountdown, 1000);
        } else {
            countdownDisplay.textContent = 'Time is up!';
        }
    }

    updateCountdown();
}

startCountdownButton.addEventListener('click', () => {
    clearTimeout(countdownTimeout); // Clear any previous countdown
    startCountdown();
});

// Stopwatch
const startStopwatchButton = document.getElementById('startStopwatch');
const stopStopwatchButton = document.getElementById('stopStopwatch');
const resetStopwatchButton = document.getElementById('resetStopwatch');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');

let stopwatchInterval;
let elapsedTime = 0;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        elapsedTime++;
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = elapsedTime % 60;
        stopwatchDisplay.textContent = `Elapsed Time: ${minutes}:${seconds}`;
    }, 1000);

    startStopwatchButton.disabled = true;
    stopStopwatchButton.disabled = false;
    resetStopwatchButton.disabled = false;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    startStopwatchButton.disabled = false;
    stopStopwatchButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    stopwatchDisplay.textContent = 'Elapsed Time: 0:00';
    startStopwatchButton.disabled = false;
    stopStopwatchButton.disabled = true;
    resetStopwatchButton.disabled = true;
}

startStopwatchButton.addEventListener('click', startStopwatch);
stopStopwatchButton.addEventListener('click', stopStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);