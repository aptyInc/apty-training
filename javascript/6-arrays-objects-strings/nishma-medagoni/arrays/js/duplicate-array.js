function removeDuplicates() {
    const arrayInput = document.getElementById("arrayInput").value
    let array

    try {
        array = JSON.parse(arrayInput)
    } catch (e) {
        document.getElementById("result").innerText = "Invalid JSON format. Please provide a valid array."
        return
    }

    
    if (!Array.isArray(array)) {
        document.getElementById("result").innerText = "Please provide a valid array."
        return
    }

    const uniqueArray = []
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i])
        }
    }

    
    document.getElementById("result").innerText = `Unique Array: ${JSON.stringify(uniqueArray)}`
}