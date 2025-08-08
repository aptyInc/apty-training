const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(strArray) {
    let arr = [];
    for(let word of strArray) {
        arr.push(word.length);   
    }    
    return arr;
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;
    const strArray = str.split(' ');   

    const res = getValues(strArray);
    output.innerText = `${res.join(' ')}`;

})
