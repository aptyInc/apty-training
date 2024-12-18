function merge(obj1, obj2) {
    const result = { ...obj1 };

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj2[key] !== null && typeof result[key] === 'object' && result[key] !== null) {
                result[key] = merge(result[key], obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }
    return result;
}

function mergeObjects() {
    const obj1 = JSON.parse(document.getElementById('obj1').value);
    const obj2 = JSON.parse(document.getElementById('obj2').value);
    const mergedObj = merge(obj1, obj2);
    document.getElementById('result').innerText = JSON.stringify(mergedObj, null, 2);
}