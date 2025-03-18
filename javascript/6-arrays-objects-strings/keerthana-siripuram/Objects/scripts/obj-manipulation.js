function addKeyValue() {
    let key = document.getElementById("key").value
    let value = document.getElementById("val").value
    let obj = {}
    if (key in Object.keys(obj)) {
        obj[key] = value
        document.getElementById("res").textContent = `Modified value for the ${key} is ${value}`
    }
    else {
        obj[key] = value
        document.getElementById("res").textContent = `Added value for the ${key} is ${value}`
    }

}