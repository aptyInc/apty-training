function customFlatten(arr) {
    let flattenedArray = []

    for (let element of arr) {
        if (Array.isArray(element)) {
            let innerFlattened = customFlatten(element)
            for (let item of innerFlattened) {
                flattenedArray.push(item)
            }
        } else {
            flattenedArray.push(element)
        }
    }

    return flattenedArray
}

function flattenArray() {
    try {
        const input = document.getElementById("nestedArray").value

        const nestedArray = JSON.parse(input)

        if (!Array.isArray(nestedArray)) {
            throw new Error("Please enter a valid array format.")
        }

        const result = customFlatten(nestedArray)
        document.getElementById("result").innerText = `Flattened Array: ${JSON.stringify(result)}`
    } catch (error) {
        document.getElementById("result").innerText = `Error: ${error.message}`
    }
}
