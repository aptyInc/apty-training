function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
      action();
    }
  }
  
  document.getElementById("createList").addEventListener("click", function () {
    const list = document.getElementById("list");
    const itemText = document.getElementById("itemInput").value;
    const repeatCount = parseInt(document.getElementById("repeatInput").value);
  
    list.innerHTML = "";
  
    repeatAction(() => {
      const listItem = document.createElement("li");
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }, repeatCount);
  });
  