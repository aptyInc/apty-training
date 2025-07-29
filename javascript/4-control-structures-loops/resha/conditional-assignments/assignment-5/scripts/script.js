const output = document.getElementById('output');

function checkOddOrEven() {
    const n1 = Number(document.getElementById('n1').value);

    switch (true) {
        case n1 % 2 === 0:
            output.innerText = `Number ${n1} is Even.`;
            break;

        case n1 % 2 !== 0:
            output.innerText = `Number ${n1} is Odd.`;
            break;
    }
}