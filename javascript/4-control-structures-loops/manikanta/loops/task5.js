function count() {
    let inp = document.getElementById('in').value;
    let frequency = {};  
    let result = '';


    for (let char of inp) {
        
        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

 
    for (let char in frequency) {
        result += `${char}: ${frequency[char]} <br>`;
    }


    document.getElementById('res').innerHTML = result;
}