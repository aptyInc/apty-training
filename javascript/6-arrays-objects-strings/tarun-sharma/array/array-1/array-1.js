function flatArray(arr) {

    var result = [];
    for (var i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            result = result.concat(flatArray(arr[i]));

        } else {

            result.push(arr[i]);
        }
    }
    return result;
}

function flattenArray() {
    var input = [1, 2, [3, 5], [5, [6, 7]]];

    var output = flatArray(input);
    
    document.getElementById("result").innerText = output;

    
}
