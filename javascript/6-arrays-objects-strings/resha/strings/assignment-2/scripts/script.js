const output = document.getElementById('output');
const show = document.getElementById('show');

function getValues(s) {
    const first = s.charAt(0)   ;
    const last = s.charAt(s.length-1);
    return [ first, last ];
}

show.addEventListener("click", () => {
    const str = document.getElementById('str').value;    
    const s = str.trim();

    const res = getValues(s);
    output.innerText = `${res.join(' ')}`;

})
