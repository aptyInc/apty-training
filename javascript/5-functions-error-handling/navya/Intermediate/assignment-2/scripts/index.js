const result = document.getElementById("result");


function filterArray(arr, callback) {
    return callback(arr);
}

function applyFilter() {
    const raw = document.getElementById("numInput").value.trim();
    const limit = Number(document.getElementById("limitInput").value);

    if (!raw) {
        result.textContent = "Please enter an array of numbers.";
        return;
    }

    const nums = raw.split(",").map(x => Number(x.trim()));

    if (nums.some(isNaN)) {
        result.textContent = "Invalid input: numbers only!";
        return;
    }

    if (isNaN(limit)) {
        result.textContent = "Enter a valid limit.";
        return;
    }


    const callbackFn = (arr) => arr.filter(n => n <= limit);


    const filtered = filterArray(nums, callbackFn);

    result.textContent = `Filtered Array: [ ${filtered.join(", ")} ]`;
}
