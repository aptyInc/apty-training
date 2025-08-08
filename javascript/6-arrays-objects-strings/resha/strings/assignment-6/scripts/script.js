const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(array) {
    let count = [];
    for(let words of array) {
        let word = words;
        for(let i=0; i<word.length; i++) {
            count.push(word.charCodeAt(i));
        }
    }
    output.innerText = `${count}`;
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;    
    if(!str) {
        output.innerText = "Please enter a string";
        return;
    }
    const array = str.split(' ').filter(word => word !== "");
    
    getValues(array);
})
