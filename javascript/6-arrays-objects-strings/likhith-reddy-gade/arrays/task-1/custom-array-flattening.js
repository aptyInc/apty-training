function customFlatten(arr) {
  const result = [];
  function flatten(input) {
    input.forEach((item) => {
      if (Array.isArray(item)) {
        flatten(item); // Recursive call for nested arrays
      } else {
        result.push(item);
      }
    });
  }
  flatten(arr);
  return result;
}

function flattenArray() {
  const input = document.getElementById("nested-array").value;
  let nestedArray;
  try {
    nestedArray = JSON.parse(input);
    if (!Array.isArray(nestedArray))
      throw new Error("Input is not a valid array.");
  } catch (error) {
    document.getElementById("flattened-result").innerText =
      "Invalid input. Please enter a valid nested array.";
    return;
  }

  const flattened = customFlatten(nestedArray);
  document.getElementById(
    "flattened-result"
  ).innerText = `Flattened Array: [${flattened.join(", ")}]`;
}
