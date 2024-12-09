function repeatAction(action, times) {
    for (var i = 1; i <= times; i++) {
        action(i);  
    }
}

function generateList() {
    var itemCount = parseInt(document.getElementById('itemCount').value) || 0;

    var itemList = document.getElementById('itemList');
    
    itemList.innerHTML = '';

    repeatAction(function(i) {
        var li = document.createElement("li");
        li.textContent = "Item " + i;  
        itemList.appendChild(li);  
    }, itemCount);  
}
