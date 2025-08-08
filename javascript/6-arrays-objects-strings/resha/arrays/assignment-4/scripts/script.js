const output = document.getElementById('output');
const convert = document.getElementById('convert');

function convertToSentence(array) {
    let str = array.join(" ");
    let upperStr = str.charAt(0).toUpperCase() + str.slice(1);
    return upperStr;
}

convert.addEventListener("click", () => {
    const words = document.getElementById("words").value;

    if(!words) {
        output.innerText = "Please enter some words.";
        return;
    }
    let array = words.split(',').map(word => word.trim()).filter(word => word !== "");
    
    let res = convertToSentence(array);
    output.innerText = `Sentence: ${res}`;
})
