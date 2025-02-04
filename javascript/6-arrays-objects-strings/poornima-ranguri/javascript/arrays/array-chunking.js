function chunkArray(arr, chunkSize) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray;
}

function onChunking() {
  const userTextElement = document.getElementById("userText");

  const userNumberElement = document.getElementById("userNumber");

  if (userNumberElement.value === "" || userTextElement.value === "") {
    document.getElementById("result").textContent = "provide values";
  } else {
    document.getElementById("result").textContent = "";
    const userArray = JSON.parse(Array(userTextElement.value.trim()));
    console.log(userArray);
    const userChunk = parseInt(userNumberElement.value);
    console.log(userChunk);
    const chunkedArray = chunkArray(userArray, userChunk);
    console.log(chunkedArray);
  }
}
