function customFlatten(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(customFlatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

document
  .getElementById("arrayForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputString = document.getElementById("nestedArray").value.trim();

    try {
      const nestedArray = JSON.parse(inputString);

      if (!Array.isArray(nestedArray)) {
        throw new Error("Input is not a valid array.");
      }

      const flattenedArray = customFlatten(nestedArray);

      document.getElementById(
        "result"
      ).textContent = `Flattened Array: [${flattenedArray.join(", ")}]`;
    } catch (error) {
      document.getElementById("result").textContent = `Error: ${error.message}`;
    }
  });
