function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function createList() {
    const item = document.getElementById("itemInput").value;
    const count = parseInt(document.getElementById("countInput").value);
    const list = document.getElementById("itemList");
    list.innerHTML = "";

    if (!item || isNaN(count) || count < 1) {
        alert("Please enter a valid item name and a positive number.");
        return;
    }

    repeatAction(() => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    }, count);
}
