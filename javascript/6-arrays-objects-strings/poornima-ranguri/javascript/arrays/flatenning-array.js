function flatteningAnArray(userArray) {
  let resultArray = [];
  userArray.map((eachElement) => {
    if (Array.isArray(eachElement)) {
      //checking type
      resultArray = resultArray.concat(flatteningAnArray(eachElement)); //addig
    } else {
      resultArray.push(eachElement);
    }
  });
  return resultArray; //returing result
}

function onFlattening() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const result = flatteningAnArray(userArray);
  document.getElementById("result").textContent = JSON.stringify(result);
}
