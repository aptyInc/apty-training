let original_object = document.getElementById("original_object");
let deep_clone_obj = document.getElementById("deep_clone");

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}

function testDeepClone() {
  let obj = { a: 1, b: { c: 2 } };
  let clone = deepClone(obj);
  clone.b.c = 10;
  deep_clone_obj.innerHTML = `<strong>Deep Clone Object</strong> :  ${JSON.stringify(
    clone
  )}`;
  original_object.innerHTML = `<strong>Original Object</strong> :  ${JSON.stringify(
    obj
  )}`;
}

testDeepClone();
