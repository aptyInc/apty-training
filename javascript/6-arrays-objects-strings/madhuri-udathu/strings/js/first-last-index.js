function getFirstAndLastCharacters(input) {
    
    if (input.length === 0) {
        return null; 
    }

    const firstCharacter = input.charAt(0);
    const lastCharacter = input[input.length - 1];

    return `${firstCharacter} ${lastCharacter}`;
}
function result(){
    const input = document.getElementById("input").value;
    const outputDiv=document.getElementById("output")
    let result= getFirstAndLastCharacters(input);
    outputDiv.textContent= result|| `null`;
}
