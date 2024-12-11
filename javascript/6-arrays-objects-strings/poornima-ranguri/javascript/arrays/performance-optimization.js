function testForLoop(arr) {
  const startTime = performance.now();
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
  }
  const endTime = performance.now();
  return endTime - startTime / 1000;
}

function testForOfLoop(arr) {
  const startTime = performance.now();
  for (const element of arr) {
  }
  const endTime = performance.now();
  return endTime - startTime / 1000;
}

function testForEach(arr) {
  const startTime = performance.now();
  arr.forEach((element) => {});
  const endTime = performance.now();
  return endTime - startTime / 1000;
}

function appendingValue(loopName, timeTaken) {
  const reslutElement = document.getElementById("result");
  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = `${loopName} Time Taken : ${timeTaken.toFixed(
    4
  )}`;
  reslutElement.appendChild(paragraphElement);
}

function comparePerformance() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));

  const forLoopTime = testForLoop(userArray);
  const forOfTime = testForOfLoop(userArray);
  const forEachTime = testForEach(userArray);
  appendingValue("forLoop", forLoopTime);
  appendingValue("forOfLoop", forOfTime);
  appendingValue("forEach", forEachTime);
  //   console.log(Math.max(forLoopTime, forOfTime, forEachTime));
  let bestMethod = "for loop";
  if (forOfTime < forLoopTime && forOfTime < forEachTime) {
    bestMethod = "for...of loop";
  } else if (forEachTime < forLoopTime && forEachTime < forOfTime) {
    bestMethod = "forEach loop";
  }
  document.getElementById(
    "analysis"
  ).textContent = `Best Method: ${bestMethod}`;

  userTextElement.value = "";
}
