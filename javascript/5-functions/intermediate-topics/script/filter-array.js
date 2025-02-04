
function filterArray(array, callback) {
    return array.filter(callback);
}

document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const limit = parseInt(document.getElementById("limit").value, 10);

    const numbers = [10, 20, 30, 40, 50, 60, 70, 80];

    const filteredNumbers = filterArray(numbers, (number) => number <= limit);

    document.getElementById("result").innerText = `Filtered Array: [${filteredNumbers.join(", ")}]`;
});
