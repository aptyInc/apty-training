function sortStringAlphabetically(input) {
    return input.split('')  
                .sort()    
                .join('');  
}

function processInput() {
    const input = document.getElementById('inputString').value;
    const result = sortStringAlphabetically(input);
    document.getElementById('sortedResult').innerText = result;
}