const output = document.getElementById("result");

function countChars() {
    const text = document.getElementById("textInput").value;

    if (!text) {
        output.textContent = "Please enter a string!";
        return;
    }

    const freq = {};


    for (let index in text) {
        const char = text[index];
        freq[char] = (freq[char] || 0) + 1;
    }


    let display = "<h3>Character Frequency</h3>";
    for (const ch in freq) {
        display += `${ch}: ${freq[ch]}<br>`;
    }

    output.innerHTML = display;
}
