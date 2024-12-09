function countCharacters() {
    const value = document.getElementById('value').value

    const char_count = {}

    for (const index in value) {
        const char = value[index]

        if (char_count[char]) {
            char_count[char]++
        }
        else {
            char_count[char] = 1
        }
    }

    let resultString = "<ul>";
    for (const char in char_count) {
        resultString += `<li>${char}: ${char_count[char]}</li>`
    }

    resultString += "</ul>"

    document.getElementById('result').innerHTML = resultString
}

