function findMostFrequent() {
    let input = document.getElementById('inputArray').value;
    let arr = input.split(',').map(Number);
    
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement;
    
    for (let num of arr) {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }

    for (let key in frequencyMap) {
        if (frequencyMap[key] > maxCount) {
            maxCount = frequencyMap[key];
            mostFrequentElement = key;
        }
    }

    document.getElementById('result').innerText = "Most frequent element: " + mostFrequentElement;
}