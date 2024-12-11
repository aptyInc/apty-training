function manipulationOfString() {
  const firstArrayElement = document.getElementById("firstArray");
  const firstArray = JSON.parse(Array(firstArrayElement.value.trim()));

  const secondArrayElement = document.getElementById("secondArray");
  const secondArray = JSON.parse(Array(secondArrayElement.value.trim()));
  const mergedArray = [...firstArray, ...secondArray];

  const resultArray = Array.from(new Set(mergedArray));

  document.getElementById("result").textContent = resultArray.join(", ");
}
