function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function createListItem(index) {
    const listItem = document.createElement("li");
    listItem.innerText = `Item ${index + 1}`;
    document.querySelector(".item-list").appendChild(listItem);
}

function generateList() {
    const itemCount = parseInt(document.getElementById("itemCount").value);
    if (isNaN(itemCount) || itemCount <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    document.querySelector(".item-list").innerHTML = "";
    repeatAction(createListItem, itemCount);
}
