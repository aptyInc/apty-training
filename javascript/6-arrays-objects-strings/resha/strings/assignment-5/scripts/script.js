const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(s, age) {
    return `Hello, my name is ${s} and I am ${age} years old.`;
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;    
    const s = str.trim();
    const age = Number(document.getElementById('age').value);
    if((isNaN(age) || age === 0) || !str) {
        output.innerText = "Please enter values";
        return;
    }
    const res = getValues(s, age);
    output.innerText = `${res}`;
})
