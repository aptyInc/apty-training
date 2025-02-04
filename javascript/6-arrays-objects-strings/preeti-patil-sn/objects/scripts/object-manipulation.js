const dynamicObject = {};

function addOrUpdateKey() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();

  // Check if the key is valid (non-empty)
  if (key === "") {
    alert("Key cannot be empty.");
    return;
  }

  // Add or update the key-value pair in the object
  dynamicObject[key] = value;

  document.getElementById("result").textContent = JSON.stringify(
    dynamicObject,
    null,
    2
  );
}
