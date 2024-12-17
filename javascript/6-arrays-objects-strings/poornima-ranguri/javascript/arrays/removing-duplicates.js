function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

function onRemovingDuplicates() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const result = removeDuplicates(userArray);

  document.getElementById("result").textContent = `[${result}]`;
}
