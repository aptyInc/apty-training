let obj = {};

function addToObject() {
  const key = document.getElementById("keyInput").value.trim();
  const value = document.getElementById("valueInput").value.trim();
  const ans = document.getElementById("result");

  if (key === "") {
    ans.innerText = "Key cannot be empty.";
    return;
  }

  obj[key] = value;
  ans.innerText = `Updated Object: ${JSON.stringify(obj)}`;
}
