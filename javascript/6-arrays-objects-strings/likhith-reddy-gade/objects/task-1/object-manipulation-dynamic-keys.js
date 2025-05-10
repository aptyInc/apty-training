let dynamicObject = {};

function addKeyValue() {
  const key = document.getElementById("key").value;
  const value = document.getElementById("value").value;

  if (key) {
    dynamicObject[key] = value;
    document.getElementById("result").innerText = JSON.stringify(
      dynamicObject,
      null,
      2
    );
    alert(`Key "${key}" added/updated with value "${value}"`);
  } else {
    alert("Please enter a key.");
  }
}
