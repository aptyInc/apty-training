function findMostFrequent() {
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

    const frequencyMap = array.reduce((map, item) => {
        map[item] = (map[item] || 0) + 1
        return map
    }, {})

    let mostFrequent = null
    let maxCount = 0

    for (const [key, value] of Object.entries(frequencyMap)) {
        if (value > maxCount) {
            maxCount = value
            mostFrequent = key
        }
    }

    document.getElementById("result").innerText = `Most Frequent Element: ${mostFrequent}`
}