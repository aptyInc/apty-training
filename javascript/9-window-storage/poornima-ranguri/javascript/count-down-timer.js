const count = document.querySelector("p");
count.textContent = 0;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let timerId;

startButton.addEventListener("click", () => {
  timerId = setInterval(() => {
    const counter = parseInt(count.textContent);
    count.textContent = counter + 1;
  }, 1000);
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  count.textContent = 0;
});

resetButton.addEventListener("click", () => {
  clearInterval(timerId);
  count.textContent = 0;
  timerId = setInterval(() => {
    const counter = parseInt(count.textContent);
    count.textContent = counter + 1;
  }, 1000);
});
