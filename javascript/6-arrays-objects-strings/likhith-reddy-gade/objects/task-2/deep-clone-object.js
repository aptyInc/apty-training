function deepClone(input) {
  return JSON.parse(JSON.stringify(input));
}

function cloneObject() {
  try {
    const inputObject = JSON.parse(
      document.getElementById("inputObject").value
    );
    const clone = deepClone(inputObject);

    document.getElementById("original").innerText = JSON.stringify(
      inputObject,
      null,
      2
    );
    document.getElementById("cloned").innerText = JSON.stringify(
      clone,
      null,
      2
    );
  } catch (e) {
    alert("Invalid JSON input! Please provide a valid JSON object.");
  }
}
