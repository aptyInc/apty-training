
function mostFrequent(arr) {
    const frequencyMap = arr.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});
    
    return Object.keys(frequencyMap).reduce((a, b) => frequencyMap[a] > frequencyMap[b] ? a : b);
}

function findMostFrequent() {
    const input = document.getElementById('arrayInput').value;
    const arr = input.split(',').map(num => Number(num.trim())); // Convert input string to an array of numbers
    
    if (arr.some(isNaN)) {
        document.getElementById('result').innerText = "Please enter a valid array of numbers.";
        return;
    }
    
    const result = mostFrequent(arr);
    document.getElementById('result').innerText = `Most frequent element: ${result}`;
}
