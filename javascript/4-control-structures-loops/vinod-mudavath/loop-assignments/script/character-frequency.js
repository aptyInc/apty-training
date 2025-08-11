
const input = prompt("Enter a string to check character frequency");

const characterFrequency = {};

for(let  i = 0 ; i < input.length; i++) {
    let char = input[i];

    if(characterFrequency[char]) 
        characterFrequency[char]++;
    else characterFrequency[char] = 1;
}

console.log(characterFrequency)

let countResult = ``;

for(let key in characterFrequency) {
    countResult += `${key} : ${characterFrequency[key]}\n`
}

document.getElementById("charcounter").innerText = `${countResult}`