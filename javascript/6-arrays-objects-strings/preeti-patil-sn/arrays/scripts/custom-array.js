function customFlatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let flattened = customFlatten(array[i]);
      for (let j = 0; j < flattened.length; j++) {
        result.push(flattened[j]); // Add each item to the result
      }
    } else {
      result.push(array[i]); // Add non-array items directly to the result
    }
  }

  return result; // Return the flattened array
}

function flattenArray() {
  const input = document.getElementById("nestedArray").value;
  const array = eval(input); // Convert input string to array (simplest method)

  const flattened = customFlatten(array);
  document.getElementById("result").textContent = JSON.stringify(flattened);
}
