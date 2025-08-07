function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clone = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

function updateNestedValue(obj, path, newValue) {
  const keys = path.split(".");
  let current = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = isNaN(keys[i]) ? keys[i] : Number(keys[i]);
    if (!(key in current)) {
      throw new Error(`Key "${keys[i]}" not found`);
    }
    current = current[key];
    if (typeof current !== "object" || current === null) {
      throw new Error("Invalid path to modify");
    }
  }

  const finalKey = isNaN(keys[keys.length - 1])
    ? keys[keys.length - 1]
    : Number(keys[keys.length - 1]);

  current[finalKey] = newValue;
}

document.getElementById("cloneBtn").addEventListener("click", () => {
  const objectInput = document.getElementById("objectInput").value.trim();
  const keyPath = document.getElementById("keyPath").value.trim();
  const newValueRaw = document.getElementById("newValue").value.trim();
  const output = document.getElementById("output");

  try {
    const original = JSON.parse(objectInput);
    const cloned = deepClone(original);

    const parsedValue =
      newValueRaw === "true"
        ? true
        : newValueRaw === "false"
        ? false
        : !isNaN(newValueRaw)
        ? Number(newValueRaw)
        : newValueRaw;

    updateNestedValue(cloned, keyPath, parsedValue);

    output.textContent = `Original Object:\n${JSON.stringify(
      original
    )}\n\nCloned Object:\n${JSON.stringify(cloned)}`;
  } catch (err) {
    output.textContent = `Error: ${err.message}`;
  }
});
