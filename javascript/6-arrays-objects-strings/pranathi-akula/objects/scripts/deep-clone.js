function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function setNestedValue(obj, path, value) {
  const keys = path.split(".");
  keys.slice(0, -1).reduce((acc, key) => acc[key], obj)[keys.at(-1)] = value;
}

function process() {
  try {
    const input = document.getElementById("input").value.trim();
    const modifyKey = document.getElementById("modifyKey").value.trim();
    const modifyValue = document.getElementById("modifyValue").value.trim();

    const originalObject = JSON.parse(input);
    const clonedObject = deepClone(originalObject);

    if (modifyKey) setNestedValue(clonedObject, modifyKey, modifyValue);

    document.getElementById("original").textContent = JSON.stringify(
      originalObject,
      null,
      2
    );
    document.getElementById("cloned").textContent = JSON.stringify(
      clonedObject,
      null,
      2
    );
  } catch {
    alert("Invalid JSON input or modification key.");
  }
}
