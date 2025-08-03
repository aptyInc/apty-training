function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i); 
    }
}

function createListItem(index) {

    const listContainer = document.getElementById('listContainer');
    
    const li = document.createElement('li');

    li.textContent = `Item ${index + 1}`;

    listContainer.appendChild(li);
}

function createListItems() {
    const numItems = document.getElementById('numItems').value;

    if (numItems > 0) { 
        document.getElementById('listContainer').innerHTML = ''; 
        repeatAction(createListItem, parseInt(numItems));
    } else {
        alert("Please enter a valid number greater than 0.");
    }
}