function merge(obj1, obj2) {
    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'object' && obj1[key] && typeof obj1[key] === 'object') {
                obj1[key] = merge(obj1[key], obj2[key]);
            } else {
                obj1[key] = obj2[key];
            }
        }
    }
    return obj1;
}

function mergeObjects() {
    let obj1Input = document.getElementById('obj1').value;
    let obj2Input = document.getElementById('obj2').value;

    try {
        // Parse the input strings into JavaScript objects
        let obj1 = JSON.parse(obj1Input);
        let obj2 = JSON.parse(obj2Input);

        // Merge the objects
        let mergedObj = merge(obj1, obj2);

        // Display the result
        document.getElementById('result').textContent = JSON.stringify(mergedObj, null, 2);
    } catch (e) {
        document.getElementById('result').textContent = "Invalid JSON input!";
    }
}