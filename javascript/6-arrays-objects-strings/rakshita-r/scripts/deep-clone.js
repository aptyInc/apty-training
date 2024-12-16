
function deepClone(obj) {
  // Handle null, undefined, or primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  // Handle objects
  const clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

function performDeepClone() {
  try {
    // Parse the user input as a JSON object
    const inputObject = JSON.parse(
      document.getElementById("objectInput").value
    );

    // Perform deep cloning
    const clonedObject = deepClone(inputObject);

    // Demonstrate that modifications to the clone don't affect the original
    clonedObject.b.c = "Modified!";

    // Display the results
    document.getElementById("result").innerText =
      `Original Object:\n${JSON.stringify(inputObject, null, 2)}\n\n` +
      `Cloned Object (after modification):\n${JSON.stringify(
        clonedObject,
        null,
        2
      )}`;
  } catch (error) {
    document.getElementById("result").innerText =
      "Invalid JSON. Please check your input.";
  }
}
