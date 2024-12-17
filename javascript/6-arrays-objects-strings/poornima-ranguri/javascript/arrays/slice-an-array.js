function onSlicing() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const shallowedArray = structuredClone(userArray);
  console.log(shallowedArray.slice(0, 3));
  console.log(shallowedArray.slice(-2));

  let resultElement = document.getElementById("result");
  let paragraphElement = document.createElement("p");
  paragraphElement.textContent = `First 3 Values by copying : ${shallowedArray.slice(
    0,
    3
  )}`;

  resultElement.appendChild(paragraphElement);

  let paraElement = document.createElement("p");
  paraElement.textContent = `Last 2 values using negative indexing: ${shallowedArray.slice(
    -2
  )}`;
  resultElement.appendChild(paraElement);
}
