let countdownInterval;
let total_countdown = 0;

function countdown_start() {
    const input_Minutes = document.querySelector('#inputMinutes').value;
    const input_seconds = document.querySelector('#inputSeconds').value;
    const display_countdown = document.querySelector('.display_countdown');

    total_countdown = (input_Minutes * 60 * 1000) + (input_seconds * 1000);
    displayCountdown();

    countdownInterval = setInterval(() => {
        if (total_countdown <= 0) {
            clearInterval(countdownInterval);
            display_countdown.textContent = "00:00";
        } else {
            total_countdown -= 1000;
            displayCountdown();
        }
    }, 1000);
}

function countdown_reset() {
    clearInterval(countdownInterval);
    total_countdown = 0;
    document.querySelector('.display_countdown').textContent = "00:00";
}

function displayCountdown() {
    const minutes = Math.floor(total_countdown / (1000 * 60));
    const seconds = Math.floor((total_countdown % (1000 * 60)) / 1000);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    document.querySelector('.display_countdown').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

let stopwatchInterval;
let stopwatchTime = 0;

function stopwatch() {
    const display_stopwatch = document.querySelector('.display_stopwatch');
    if (stopwatchInterval) {
        clearInterval(stopwatchInterval);
        stopwatchInterval = null;
    } else {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            const minutes = Math.floor(stopwatchTime / 60);
            const seconds = stopwatchTime % 60;
            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
            const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
            display_stopwatch.textContent = `${formattedMinutes}:${formattedSeconds}`;
        }, 1000);
    }
}
