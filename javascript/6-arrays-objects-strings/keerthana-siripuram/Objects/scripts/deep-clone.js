function modifyObj() {
    let obj = JSON.parse(document.getElementById("json-string").value)
    let property = document.getElementById("property").value
    let clone = deepClone(obj)
    modifyProperty(clone, property, 3)
    document.getElementById("org").innerHTML = JSON.stringify(obj)
    document.getElementById("cloned").innerText = JSON.stringify(clone)
}

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    if (Array.isArray(obj)) {
        let copy = [];
        for (let i = 0; i < obj.length; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    let copy = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key]);
        }
    }
    return copy;
}

function modifyProperty(clone, path, newValue) {
    let keys = path.split(".");
    let current = clone;

    for (let i = 0; i < keys.length - 1; i++) {
        if (current[keys[i]]) {
            current = current[keys[i]];
        } else {
            document.getElementById("err").innerText = `Property ${keys[i]} not found`
            return;
        }
    }

    let lastKey = keys[keys.length - 1];
    if (current[lastKey] !== undefined) {
        current[lastKey] = newValue;
    } else {
        document.getElementById("err").innerText = `Property ${lastKey} not found`
    }
}
