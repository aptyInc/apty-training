function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] && typeof source[key] === "object") {
      if (!target[key]) {
        target[key] = {};
      }
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

function mergeObjects() {
  try {
    const obj1 = JSON.parse(document.getElementById("object1").value);
    const obj2 = JSON.parse(document.getElementById("object2").value);
    const merged = deepMerge({ ...obj1 }, obj2);

    document.getElementById("result").innerText = JSON.stringify(
      merged,
      null,
      2
    );
  } catch (e) {
    alert("Invalid JSON input! Please provide valid JSON objects.");
  }
}
