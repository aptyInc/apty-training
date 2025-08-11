

let count = 0;

document.getElementById('form').onsubmit = evt => {
    evt.preventDefault();
    count += 1;
    document.getElementById('result').innerText = count
}