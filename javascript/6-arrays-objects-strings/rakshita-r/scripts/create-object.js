const dynamicObject = {};

function addKeyValue() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();

  if (!key) {
    alert("Key cannot be empty!");
    return;
  }

  dynamicObject[key] = value;

  document.getElementById(
    "result"
  ).innerText = `Updated Object:\n${JSON.stringify(dynamicObject, null, 2)}`;
}
