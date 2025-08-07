function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (let key in obj2) {
    if (
      obj2.hasOwnProperty(key) &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      !Array.isArray(obj2[key])
    ) {
      if (typeof result[key] === "object" && result[key] !== null) {
        result[key] = deepMerge(result[key], obj2[key]);
      } else {
        result[key] = { ...obj2[key] };
      }
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

function mergeObjects() {
  const obj1Text = document.getElementById("obj1").value;
  const obj2Text = document.getElementById("obj2").value;
  const resultEl = document.getElementById("result");

  try {
    const obj1 = JSON.parse(obj1Text);
    const obj2 = JSON.parse(obj2Text);

    const merged = deepMerge(obj1, obj2);

    resultEl.innerText = `Merged Object:\n${JSON.stringify(merged, null, 2)}`;
  } catch (e) {
    resultEl.innerText = "Invalid input";
  }
}
