function deepMerge(obj1, obj2) {
  let merged = {};

  for (let key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      // If the value is an object and exists in both, merge recursively
      if (
        typeof obj1[key] === "object" &&
        obj1[key] !== null &&
        obj2.hasOwnProperty(key) &&
        typeof obj2[key] === "object" &&
        obj2[key] !== null
      ) {
        merged[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        // Otherwise, take the value from obj1
        merged[key] = obj1[key];
      }
    }
  }

  // Add or overwrite properties from obj2
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!merged.hasOwnProperty(key)) {
        merged[key] = obj2[key];
      } else if (typeof obj2[key] !== "object" || obj2[key] === null) {
        merged[key] = obj2[key];
      }
    }
  }

  return merged;
}

document.getElementById("mergeButton").addEventListener("click", function () {
  const obj1Input = document.getElementById("obj1").value;
  const obj2Input = document.getElementById("obj2").value;

  try {
    const obj1 = JSON.parse(obj1Input);
    const obj2 = JSON.parse(obj2Input);

    const result = deepMerge(obj1, obj2);
    document.getElementById("result").textContent = JSON.stringify(
      result,
      null,
      2
    );
  } catch (e) {
    document.getElementById("result").textContent =
      "Error: Please ensure both inputs are valid JSON objects.";
  }
});
