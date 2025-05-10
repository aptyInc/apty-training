function countCharacterFrequency() {
    var str = document.getElementById("inputString").value;
    var frequency = {};

    for (let i in str) {
        var char = str[i];
        frequency[char] = (frequency[char] || 0) + 1;
    }

    var result = "";
    for (let char in frequency) {
        result += char + ": " + frequency[char] + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}
