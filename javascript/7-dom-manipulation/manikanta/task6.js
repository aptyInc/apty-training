function updateList() {
           
    const listItems = document.querySelectorAll('#itemList li');

   
    if (listItems.length >= 4) {
        listItems[1].textContent = 'Updated Item'; 
        listItems[3].textContent = 'Updated Item'; 
    }
}