document.getElementById('countButton').addEventListener('click', function() {
    const parentElements = document.querySelectorAll('div'); 
    const resultList = document.getElementById('resultList');
    resultList.innerHTML = ''; 

    parentElements.forEach(function(parentElement, index) {
        const nestedElementsCount = parentElement.children.length; 
        const listItem = document.createElement('li');
        listItem.textContent = `Parent ${index + 1} has ${nestedElementsCount} nested elements.`;
        resultList.appendChild(listItem);
    });
});