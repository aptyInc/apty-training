function countDown() {
  const counter = document.getElementById("input");

  let number = parseInt(counter.value);
  const result = document.getElementById("result");

  const intervalId = setInterval(decreaseCounter, 1000);
  result.textContent = `Number of seconds left: ${number}`;

  function decreaseCounter() {
    if (number > 0) {
      number--;
      result.textContent = `Number of seconds left: ${number}`;
    } else {
      clearInterval(intervalId);
    }
  }
}

function stopWatch() {
  let number = 0;
  const result = document.getElementById("result");
  clearInterval(intervalId); // 2;
  intervalId = setInterval(increaseCounter, 1000); // 2
  result.textContent = `Number of seconds: ${number}`;

  function increaseCounter() {
    console.log("Counter");
    number++;
    result.textContent = `Number of seconds: ${number}`;
  }
}

let intervalId; // undefined

function pauseStopWatch() {
  console.log(intervalId);

  clearInterval(intervalId);
}
