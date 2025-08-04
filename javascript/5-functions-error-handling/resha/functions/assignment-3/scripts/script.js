const output = document.getElementById('output');
const incr = document.getElementById('incr');
const decr = document.getElementById('decr');

let count = 0;

incr.addEventListener('click', () => {
    count++;
    output.innerText = count;
})

decr.addEventListener('click', () => {
    count--;
    output.innerText = count;
})

