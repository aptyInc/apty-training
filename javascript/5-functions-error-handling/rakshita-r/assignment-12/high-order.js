function repeatAction(action, n) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function createList() {
  const listContainer = document.getElementById("listContainer");
  listContainer.innerHTML = "";

  const numItems = parseInt(
    prompt("Enter the number of items in the list:"),
    10
  );

  if (isNaN(numItems) || numItems <= 0) {
    alert("Please enter a valid positive number!");
    return;
  }

  repeatAction(() => {
    const listItem = document.createElement("li");
    const itemText = prompt("Enter text for the item:");
    listItem.textContent =
      itemText || `Item ${listContainer.childElementCount + 1}`;
    listContainer.appendChild(listItem);
  }, numItems);
}


document
  .getElementById("generateListButton")
  .addEventListener("click", createList);
