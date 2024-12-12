function deepClone(obj) {

    return JSON.parse(JSON.stringify(obj));

}

function cloneObject() {
    
    var obj = { a: 1, b: { c: 2 } };
    var clone = deepClone(obj);
    clone.b.c = 3;

    document.getElementById("result").innerText =
        "Original: " + JSON.stringify(obj) + " | Clone: " + JSON.stringify(clone);

}
