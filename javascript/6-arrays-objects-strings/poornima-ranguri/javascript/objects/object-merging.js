let mergedObject = {};

function mergeObjects(firstObject, secondObject) {
  //starting with shallow copy
  const mergedObject = { ...firstObject };

  // Merge second object
  for (const key in secondObject) {
    if (secondObject.hasOwnProperty(key)) {
      // If the key is an object, we need to merge it recursively
      if (typeof secondObject[key] === "object" && secondObject[key] !== null) {
        mergedObject[key] = mergeObjects(mergedObject[key], secondObject[key]); //recursive
      } else {
        mergedObject[key] = secondObject[key];
      }
    }
  }

  return mergedObject;
}

function OnMerging() {
  const firstObjectElement = document.getElementById("firstObject");
  const secondObjectElement = document.getElementById("secondObject");

  try {
    const firstObject = JSON.parse(firstObjectElement.value.trim());
    const secondObject = JSON.parse(secondObjectElement.value.trim());
    const resultObject = mergeObjects(firstObject, secondObject);
    document.getElementById("result").textContent =
      JSON.stringify(resultObject);
  } catch (error) {
    document.getElementById(
      "errorMesssage"
    ).textContent = `Invalid JSON Input: ${error.message}`;
  }
}
