const countOp = document.getElementById("countOp");
const stopwatchOp = document.getElementById("stopwatchOp");

let countdown;
let stopwatchTime = 0;
let stopwatchInterval;

document.getElementById("startCD").addEventListener("click", () => {
    let time = Number(document.getElementById("time").value);
    countdown = setInterval(() => {
        time--;
        console.log("time",time)
        countOp.innerText = `Countdown: ${time}`;

        if (time === 0) {
            clearInterval(countdown);
            countOp.innerText = "Countdown completed!";
        }
    }, 1000)
})

document.getElementById("stopCD").addEventListener("click", () => {
    clearInterval(countdown);
    countdown = null;
})

document.getElementById("startSW").addEventListener("click", () => {
    if (!stopwatchInterval) {
        stopwatchInterval = setInterval(() => {
            stopwatchTime++;
            stopwatchOp.innerText = `Stopwatch Time: ${stopwatchTime}sec`;
        }, 1000);
    }
})

document.getElementById("stopSW").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
})


document.getElementById("resetSW").addEventListener("click", () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    stopwatchOp.innerText = stopwatchTime;
})


