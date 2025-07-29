const output = document.getElementById('output');

function generate() {
    const str = document.getElementById('str').value;
    const count = {};

    output.innerText = `Character Count:\n`;

    for(let i in str) {
        let char = str[i];
        if(count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1;
        }
    }
    for(let char in count) output.innerText += `${char}: ${count[char]}\n`
}