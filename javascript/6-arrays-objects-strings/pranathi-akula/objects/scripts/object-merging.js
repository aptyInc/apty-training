function deepMerge(obj1, obj2) {
  const result = { ...obj1 };

  for (const key in obj2) {
    if (
      obj2.hasOwnProperty(key) &&
      typeof obj2[key] === "object" &&
      obj2[key] !== null &&
      !Array.isArray(obj2[key])
    ) {
      result[key] = deepMerge(result[key] || {}, obj2[key]);
    } else {
      result[key] = obj2[key];
    }
  }

  return result;
}

function mergeObjects() {
    const obj1 = JSON.parse(document.getElementById("object1").value.trim());
    const obj2 = JSON.parse(document.getElementById("object2").value.trim());
    const mergedObject = deepMerge(obj1, obj2);
    document.getElementById("output").textContent = JSON.stringify(
      mergedObject,
      null,
      2
    );
}
