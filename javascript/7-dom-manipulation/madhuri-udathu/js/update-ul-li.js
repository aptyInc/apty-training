document.getElementById('update-button').addEventListener('click', () => {
    const listItems = document.getElementsByTagName('li');
    if (listItems[1]) {
        listItems[1].textContent = 'Updated Item2';
    }
    if (listItems[3]) {
        listItems[3].textContent = 'Updated Item4';
    }
});
