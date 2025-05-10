function onGettingFirstAndLast(userInput) {
  let firstCharacter = userInput[0];
  let secondCharacter = userInput.slice(-1); //getting end
  return `${firstCharacter} ${secondCharacter}`;
}

function onResult() {
  const userInputElement = document.getElementById("userText");
  const userInput = userInputElement.value.trim(); //Removing Extra spaces

  const lengthOfString = userInput.length;
  if (userInput === "") {
    document.getElementById("result").textContent = "null";
  } else {
    const result = onGettingFirstAndLast(userInput);
    document.getElementById("result").textContent = result; //appending to home character
  }
}
