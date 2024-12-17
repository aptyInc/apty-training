function countFrequency() {
    const input = document.getElementById("userInput").value;
    const Count = {};

    // Use a for-in loop to count characters
    for (const index in input) {
        const char = input[index];
        if (Count[char] !== null) {
            Count[char] += 1; 
        } else {
            Count[char] = 1; 
        }
    }

    let result = "Character frequencies are<br>";
    for (const char in Count) {
        result += `${char}: ${Count[char]}<br>`;
    }

    // Display the result
    document.getElementById("result").innerHTML = result;
}