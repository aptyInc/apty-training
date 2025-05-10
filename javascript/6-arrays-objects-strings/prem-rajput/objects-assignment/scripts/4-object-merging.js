function merge(obj1, obj2) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (
                typeof obj2[key] === "object" &&
                typeof obj1[key] === "object"
            ) {
                obj1[key] = merge(obj1[key], obj2[key]); // Recursively merge if both are objects
            } else {
                obj1[key] = obj2[key]; // Overwrite or add new properties
            }
        }
    }
    return obj1;
}

function mergeObjects() {
    let obj1 = JSON.parse(document.getElementById("obj1Input").value);
    let obj2 = JSON.parse(document.getElementById("obj2Input").value);

    let mergedObj = merge(obj1, obj2);
    document.getElementById("result").textContent = JSON.stringify(
        mergedObj,
        null,
        2
    );
}
