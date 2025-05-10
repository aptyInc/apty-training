

document.getElementById('startcountdown').addEventListener('click', () => {
    let timerId;
    clearInterval(timerId)

    const inputSeconds = parseInt(document.getElementById('seconds').value, 10);

    if (isNaN(inputSeconds) || inputSeconds <= 0) {
        alert("Please enter a valid number of seconds!");
        return;
    }

    let remainSeconds = inputSeconds;
    const countdownDisplay = document.getElementById('countdowndisplay')

    function updateCountdown() {
        const minutes = Math.floor(remainSeconds / 60).toString().padStart(2, "0");
        const seconds = (remainSeconds % 60).toString().padStart(2, "0");
        countdownDisplay.innerText = `${minutes}:${seconds}`;

        if (remainSeconds <= 0) {
            clearInterval(timerId);
            alert("Time's up!");
        }

        remainSeconds--;
    }
    updateCountdown();

    timerId = setInterval(updateCountdown, 1000);
})



let stopWatchTimerId = 0;
let timeInseconds = 0;
let isRunning = false;

function updateStopWatchDisplay() {
    const minutes = Math.floor(timeInseconds / 60).toString().padStart(2, "0");
    const seconds = (timeInseconds % 60).toString().padStart(2, "0");
    document.getElementById('stopwatchdisplay').innerText = `${minutes}:${seconds}`;
}


document.getElementById('start').addEventListener('click', () => {
    if (isRunning) return;
    isRunning = true;
    stopWatchTimerId = setInterval(() => {
        timeInseconds++;
        updateStopWatchDisplay()
    }, 1000)
})

document.getElementById('stop').addEventListener('click', () => {
    clearInterval(stopWatchTimerId);
    isRunning = false;
})

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(stopWatchTimerId);
    isRunning = false;
    timeInseconds = 0;
    updateStopWatchDisplay()
})