
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; 
    }

    // Create a new object or array depending on the type
    const clone = Array.isArray(obj) ? [] : {};

    // Recursively clone each property
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepClone(obj[key]);
        }
    }

    return clone;
}


function performDeepClone() {
    const obj = {a: 1, b: {c: 2}};
    const clone = deepClone(obj);
    
    // Modify the cloned object
    clone.b.c = 3;

    document.getElementById('clonedObject').innerText = JSON.stringify(clone, null, 2);
    document.getElementById('originalObject').innerText = JSON.stringify(obj, null, 2);
}
