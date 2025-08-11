function customFlattenarray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(customFlattenarray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

function flattenArray() {
  const input = document.getElementById("input").value;
  const inputArray = JSON.parse(input);
  if (Array.isArray(inputArray)) {
    const flattenedArray = customFlattenarray(inputArray);
    document.getElementById("result").textContent =
      "Result: Flattened Array: " + JSON.stringify(flattenedArray);
  } else {
    document.getElementById("result").textContent =
      "Please enter a valid array.";
  }
}
