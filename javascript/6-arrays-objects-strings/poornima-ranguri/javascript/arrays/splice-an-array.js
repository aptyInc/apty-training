function onReplacing() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const shallowedArray = structuredClone(userArray);
  shallowedArray.splice(1, 1, "Purplle");
  shallowedArray.splice(3, 0, "Orange");
  shallowedArray.splice(2, 1);
  let resultElement = document.getElementById("result");
  resultElement.textContent = JSON.stringify(shallowedArray);
}
