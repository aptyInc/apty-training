

function mostFrequent(arr) {

    if (arr.length === 0) return null;

    [1, 3, 2, 2, 3, 3, 3, 2]

    const freqObj = {}; 
    let mostFrequentElement = arr[0];
    let maxCount = 0;

    arr.forEach(element => {
        freqObj[element] = (freqObj[element] || 0) + 1;
        if (freqObj[element] > maxCount) {
            maxCount = freqObj[element];
            mostFrequentElement = element;
        }
    });

    return mostFrequentElement;
}


document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    const inputStr = document.getElementById('input').value;

    try {
        const arr = JSON.parse(inputStr);

        if (!Array.isArray(arr))
            throw new Error('Input should be an Array.');
        const result = mostFrequent(arr);
        document.getElementById('result').innerText = `Frequent element in array is: ${result}`;

    } catch (error) {
        document.getElementById('result').innerText = `Error: Invalid input. input shoulbe valid format. Eg: [1,2,3,3,4]`
    }
})