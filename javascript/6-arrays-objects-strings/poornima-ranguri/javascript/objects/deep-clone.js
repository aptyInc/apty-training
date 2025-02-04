function deepClone(originalObject) {
  let cloneObject = {};
  Object.keys(originalObject).map((eachKey) => {
    if (typeof eachKey === "object") {
      cloneObject[eachKey] = deepClone(originalObject[eachKey]);
    } else {
      cloneObject[eachKey] = originalObject[eachKey];
    }
  });

  return cloneObject;
}

function handleDeepClone() {
  const userInput = document.getElementById("userInput").value;
  const outputOriginal = document.getElementById("outputOriginal");
  const outputClone = document.getElementById("outputClone");

  let originalObject = JSON.parse(userInput);
  // let obj = {"a": 1, "b": {"c": 2} };
  const clonedObj = deepClone(originalObject);
  console.log(clonedObj);
  outputOriginal.textContent = `Original Object: ${JSON.stringify(clonedObj)}`;
  outputClone.textContent = `Cloned Object: ${JSON.stringify(clonedObj)}`;
}
