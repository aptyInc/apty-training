function processArray(numbers) {
  const result = numbers
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, eachNum) => sum + eachNum, 0);
  return result;
}

function onCombining() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const result = processArray(userArray);

  document.getElementById(
    "result"
  ).textContent = `Even Numbers Filterd Multiplied by 3 of an Array : ${result}`;
}
