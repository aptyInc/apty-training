function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i); 
    }
}


function createList() {

    let itemText = document.getElementById("itemText").value || "Default Item";

    let itemCount = parseInt(document.getElementById("itemCount").value) || 1;

    
    let itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    
    repeatAction(() => {
        let listItem = document.createElement("li");
        listItem.textContent = itemText;

        itemList.appendChild(listItem);

    }, itemCount);

    
}