const dynamicObject = {};

function addtoObject() {
  const key = document.getElementById("key").value.trim();
  const value = document.getElementById("value").value.trim();

  if (!key) {
    alert("Key cannot be empty.");
    return;
  }

  dynamicObject[key] = value;
  document.getElementById("result").textContent = JSON.stringify(
    dynamicObject,
    null,
    2
  );
}
