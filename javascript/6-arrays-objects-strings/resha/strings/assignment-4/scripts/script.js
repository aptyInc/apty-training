const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(s) {
    return s.sort();
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;    
    const s = str.trim();

    const res = getValues(s);
    output.innerText = `${res}`;

})
