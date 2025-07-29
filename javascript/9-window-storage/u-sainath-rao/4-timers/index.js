const countdownInput = document.getElementById("countdownInput");
const startCountdownButton = document.getElementById("startCountdown");
const countdownDisplay = document.getElementById("countdownDisplay");

const startStopwatchButton = document.getElementById("startStopwatch");
const stopStopwatchButton = document.getElementById("stopStopwatch");
const stopwatchDisplay = document.getElementById("stopwatchDisplay");

let countdownTimer;
let stopwatchTimer;
let stopwatchTime = 0;

startCountdownButton.addEventListener("click", () => {
	let countdownTime = parseInt(countdownInput.value, 10);

	countdownDisplay.textContent = `Time left: ${countdownTime}s`;

	if (countdownTimer) clearTimeout(countdownTimer);

	function countdown() {
		countdownTime--;
		countdownDisplay.textContent = `Time left: ${countdownTime}s`;

		if (countdownTime > 0) {
			countdownTimer = setTimeout(countdown, 1000);
		} else {
			countdownDisplay.textContent = "Time's up!";
		}
	}

	countdown();
});

startStopwatchButton.addEventListener("click", () => {
	if (stopwatchTimer) clearInterval(stopwatchTimer);

	stopwatchTimer = setInterval(() => {
		stopwatchTime++;
		stopwatchDisplay.textContent = `Time: ${stopwatchTime}s`;
	}, 1000);
});

stopStopwatchButton.addEventListener("click", () => {
	if (stopwatchTimer) clearInterval(stopwatchTimer);
});
