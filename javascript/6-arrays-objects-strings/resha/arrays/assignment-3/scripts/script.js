const output = document.getElementById('output');

const enqueue = document.getElementById('enqueue');
const dequeue = document.getElementById('dequeue');
const peek = document.getElementById('peek');
const isEmpty = document.getElementById('isEmpty');
const show = document.getElementById('show');

let q = [];

enqueue.addEventListener("click", () => {
    const num = Number(document.getElementById('num').value);
    if (isNaN(num)) {
        output.innerText = `Please enter a valid number`;
        return;
    }
    q.unshift(num);
    output.innerText = `Enqueued: ${num}`;
});

dequeue.addEventListener("click", () => {
    if (q.length === 0) {
        output.innerText = `Queue is empty!`;
        return;
    }
    q.reverse();
    const ele = q.shift();
    q.reverse();
    output.innerText = `Dequeued: ${ele}`;
});

peek.addEventListener("click", () => {
    if (q.length === 0) {
        output.innerText = `Queue is empty`;
    } else {
        output.innerText = `Next Element: ${q[q.length - 1]}`;
    }
});


show.addEventListener("click", () => {
    output.innerText = `Queue: ${q}`;
});
