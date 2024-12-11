let myObject = {};

function updateObject() {
    let key = document.getElementById('keyInputBox').value;
    let value = document.getElementById('valueInputBox').value;
    myObject[key] = value;
    document.getElementById('objectDisplay').textContent = JSON.stringify(myObject, null, 2);
}