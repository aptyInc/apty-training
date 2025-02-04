function mostFrequent(arr) {
    const frequencyMap = arr.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});//we use this initial value that is empty object
    
    let mostFrequentElement = arr[0];
    let maxCount = 0;
    
    for (let key in frequencyMap) {
        if (frequencyMap[key] > maxCount) {
            maxCount = frequencyMap[key];
            mostFrequentElement = key;
        }
    }
    
    return mostFrequentElement;
}

function findMostFrequent() {
    const input = document.getElementById("arrayInput").value.trim();
    const array = input.split(',').map(Number);
    
    const result = mostFrequent(array);
    document.getElementById("result").textContent = `Most Frequent Element: ${result}`;
}