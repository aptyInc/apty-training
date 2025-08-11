function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
function generateList() {
  const count = parseInt(document.getElementById("itemCount").value);
  const text = document.getElementById("itemText").value;

  document.getElementById("listContainer").innerHTML = "";

  if (isNaN(count) || count <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }
  repeatAction(function (i) {
    const li = document.createElement("li");
    li.textContent = `${text} ${i + 1}`;
    document.getElementById("listContainer").appendChild(li);
  }, count);
}
