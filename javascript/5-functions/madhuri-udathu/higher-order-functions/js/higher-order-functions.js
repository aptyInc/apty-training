function repeatAction(action, n) {
    for (let i = 0; i < n; i++) {
        action(i); // Call the action function with the current index
    }
}

// Function to generate the list dynamically
function generateList() {
    const list = document.getElementById('list');
    list.innerHTML = ''; // Clear the list

    const itemText = document.getElementById('item').value || 'Default Item';
    const times = parseInt(document.getElementById('times').value);

    if (isNaN(times) || times <= 0) {
        alert('Please enter a valid number of times (greater than 0).');
        return;
    }

    repeatAction(function list() {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = itemText; // Set its text
        list.appendChild(listItem); // Add it to the list
    }, times);
}