const dynamicObject = {};
function addOrUpdateKey() {

    const key = document.getElementById("key").value;
    const value = document.getElementById("value").value;

    if (key === '') {
        alert('Key cannot be empty!');
        return;
    }

    dynamicObject[key] = value;
    document.getElementById("result").textContent = JSON.stringify(dynamicObject);
}