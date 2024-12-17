const obj = {};

function addKeyValue() {
    const key = document.getElementById("keyInput").value;
    const value = document.getElementById("valueInput").value;
    obj[key] = value;
    document.getElementById("result").innerText = JSON.stringify(obj, null, 2);
}
