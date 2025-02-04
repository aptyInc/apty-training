function deepMerge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (
        typeof obj2[key] === "object" &&
        obj2[key] !== null &&
        typeof obj1[key] === "object" &&
        obj1[key] !== null
      ) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}

function showMergedObject() {
  let obj1 = { a: 1, b: { x: 10 } };
  let obj2 = { b: { y: 20 }, c: 3 };
  let merged = deepMerge(obj1, obj2);
  document.getElementById("result").textContent = `${JSON.stringify(merged)}`
}
