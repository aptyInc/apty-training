// Function to perform a deep clone of an object
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return the value if it's not an object
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item)); // Recursively clone array elements
  }

  // Handle objects
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); // Recursively clone object properties
    }
  }
  return clonedObj;
}

// Example input object
const originalObject = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, { e: 5 }],
  },
};

// Perform deep cloning
const clonedObject = deepClone(originalObject);

// Display the original and cloned objects
document.getElementById("original").textContent = JSON.stringify(
  originalObject,
  null,
  2
);
document.getElementById("clone").textContent = JSON.stringify(
  clonedObject,
  null,
  2
);

// Function to modify the cloned object and demonstrate immutability of the original object
function modifyClone() {
  clonedObject.b.c = 10; // Modify a nested property in the cloned object
  clonedObject.b.d[2].e = 20; // Modify a nested object inside an array

  // Update the displayed cloned object
  document.getElementById("clone").textContent = JSON.stringify(
    clonedObject,
    null,
    2
  );

  // Original object remains unchanged
  document.getElementById("original").textContent = JSON.stringify(
    originalObject,
    null,
    2
  );
}
