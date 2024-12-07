function countCharacterFrequency(){
    const input = document.getElementById("text").value;
    const frequency ={};
    for (let i in input){
        const char= input[i];
        if(frequency[char]){
            frequency[char]++;
        }else {
            frequency[char] = 1;
        }
    }

    let result ="character frequency: <br>";
    for (let char in frequency){
        result += `${char} : ${frequency[char]} <br>`;
    }
    document.getElementById("result").innerHTML = result;
}