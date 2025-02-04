
let dynamicObject = {};

function addKeyValue() {
    
    const key = document.getElementById('key').value;
    const value = document.getElementById('value').value;

    dynamicObject[key] = value;

    
    displayObject();
}

function displayObject() {
    
    const res = document.getElementById('res');
    res.innerHTML = `<pre>${JSON.stringify(dynamicObject, null, 2)}</pre>`;
}