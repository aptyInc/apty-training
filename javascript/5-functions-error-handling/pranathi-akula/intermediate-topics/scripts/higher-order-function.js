function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function createListItems(index) {
    const list = document.getElementById("item");
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${index + 1}`;
    list.appendChild(listItem);
}

document.getElementById("generateList").addEventListener("click", () => {
    const count = parseInt(document.getElementById("items").value, 10);
    const list = document.getElementById("item");
    list.innerHTML = ""; 
    if (!isNaN(count) && count > 0) {
        repeatAction(createListItems, count);
    } else {
        alert("Please enter a valid positive number.");
    }
});
