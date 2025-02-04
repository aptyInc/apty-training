function mostFrequent(arr) {
    let freq = {};
    let maxCount = 0;
    let mostFrequentElement;

    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mostFrequentElement = num;
        }
    }

    return mostFrequentElement;
}

function findMostFrequent() {
    const input = document.getElementById('inputArray').value;
    const arr = input.split(',').map(num => parseInt(num.trim()));

    if (arr.length > 0) {
        const result = mostFrequent(arr);
        document.getElementById('result').innerText = `Most Frequent Element: ${result}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid array of numbers.';
    }
}