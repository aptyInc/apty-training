const output = document.getElementById('output');
const show = document.getElementById('show');

show.addEventListener("click", () => {
    const array = document.getElementById('array').value;

    if (!array.trim()) {
        output.innerText = "Please enter numbers.";
        return;
    }

    const numbers = array.split(',').map(Number);

    let sum = 0;

    for (let num of numbers) {
        if (num % 2 === 0) {
            sum += num * 2;
        }
    }

    output.innerText = `Result: ${sum}`;
});
