var obj = {};

function addObject() {
    
    var key = document.getElementById("key").value;

    var value = document.getElementById("value").value;
    obj[key] = value;

    document.getElementById("result").innerText = JSON.stringify(obj);

}
