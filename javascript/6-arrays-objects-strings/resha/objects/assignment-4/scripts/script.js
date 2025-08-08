function merge(obj1, obj2) {
    let result = {};

    for (let key in obj1) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            result[key] = merge(obj1[key], obj2[key]);
        } else {
            result[key] = obj1[key];
        }
    }

    for (let key in obj2) {
        if (typeof obj2[key] === 'object' && typeof result[key] === 'object') {
            result[key] = merge(result[key], obj2[key]);
        } else {
            result[key] = obj2[key];
        }
    }

    return result;
}

function mergeObjects() {
    let obj1 = { a: 1, b: { x: 10 } };
    let obj2 = { b: { y: 20 }, c: 3 };

    let merged = merge(obj1, obj2);
    document.getElementById('output').innerText = JSON.stringify(merged, null, 2);
}