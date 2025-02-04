
function customFlatten(arr) {
    const result = [];
    function flattenHelper(element) {
            if (Array.isArray(element)) {
                element.forEach(flattenHelper)
            } else {
                result.push(element);
            }
    }
    flattenHelper(arr);
    return result;
}


document.getElementById('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    const input = document.getElementById("input").value;
    try {
        const array = JSON.parse(input);
        if (!Array.isArray(array)) {
            throw new Error("Input must be a valid array.");
        }
        const flattenedArray = customFlatten(array);
        document.getElementById("result").innerText = `flatten array is : ${JSON.stringify(flattenedArray)}`;
    } catch (error) {
        document.getElementById("result").innerText = `Error: ${error.message}`;
    }
})