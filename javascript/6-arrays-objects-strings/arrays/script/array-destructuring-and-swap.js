
document.getElementById('form').addEventListener('submit', evt => {
    evt.preventDefault();

    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;

    const arr = [a,b];

    [b, a] = arr;

    document.getElementById('result').innerText = `After swap number is : A = ${a}, B: ${b} `;
})