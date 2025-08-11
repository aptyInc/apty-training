
function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function createListItem(index) {
    const list = document.getElementById("dynamicList");
    const listItem = document.createElement("li");
    listItem.textContent = `Item ${index + 1}`;
    list.appendChild(listItem);
}


document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const numberOfItems = parseInt(document.getElementById("number1").value, 10);

    const list = document.getElementById("dynamicList");
    list.innerHTML = "";

    repeatAction(createListItem, numberOfItems);
});
