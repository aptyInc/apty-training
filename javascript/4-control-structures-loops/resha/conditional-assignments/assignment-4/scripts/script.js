const output = document.getElementById('output');

function checkLargestNumber() {
    const n1 = Number(document.getElementById('n1').value);
    const n2 = Number(document.getElementById('n2').value);
    const n3 = Number(document.getElementById('n3').value);

    let max;
    switch (true) {
        case (n1 >= n2 && n1 >= n3):
            max = n1;
            break;
        case (n2 >= n1 && n2 >= n3):
            max = n2;
            break;
        case (n3 >= n1 && n3 >= n2):
        max = n3;
        break;
    }

    output.innerText = `Largest Number among ${n1}, ${n2} and ${n3} is ${max}.`;
}