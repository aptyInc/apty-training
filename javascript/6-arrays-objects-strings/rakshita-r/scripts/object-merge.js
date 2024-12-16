function deepMerge(target, source) {
  if (typeof target !== "object" || target === null) return target;
  if (typeof source !== "object" || source === null) return source;

  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === "object" && !Array.isArray(source[key])) {
        // Recursively merge objects
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        // Overwrite primitive values or arrays
        target[key] = source[key];
      }
    }
  }
  return target;
}

function mergeObjects() {
  try {
    // Get input objects from textareas
    const obj1 = JSON.parse(
      document.getElementById("object1Input").value.trim()
    );
    const obj2 = JSON.parse(
      document.getElementById("object2Input").value.trim()
    );

    // Merge the two objects
    const mergedObject = deepMerge({ ...obj1 }, obj2);

    // Display the result
    document.getElementById(
      "result"
    ).innerText = `Merged Object:\n${JSON.stringify(mergedObject, null, 2)}`;
  } catch (error) {
    document.getElementById("result").innerText =
      "Invalid JSON. Please check your input.";
  }
}
