function updateButton(){
    var listItems = document.querySelector('#list').children;
    if(listItems[1]){
        listItems[1].innerHTML = 'I have been changed';
    }

    if(listItems[3]){
        listItems[3].innerHTML = 'I have been changed';
    }
}