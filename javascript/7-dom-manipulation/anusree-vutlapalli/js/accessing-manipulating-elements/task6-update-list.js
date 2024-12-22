document.getElementById('result').addEventListener('click', function() {
            
    const listItems = document.querySelectorAll('#itemList li');
    listItems[1].textContent = "Updated List Text 2"; 
    listItems[3].textContent = "Updated List Text 4"; 
});