const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const array = document.getElementById('array').value;
    
    if (!array) {
        output.innerText = "Please enter array elements";
        return;
    }

    const arr = array.split(',').map(num => Number(num.trim()));

    const freqMap = arr.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    let maxCount = 0;
    let mostFrequent = null;

    for (let num in freqMap) {
        if (freqMap[num] > maxCount) {
            maxCount = freqMap[num];
            mostFrequent = num;
        }
    }

    output.innerText = `Most Frequent Element: ${mostFrequent}`;
});
