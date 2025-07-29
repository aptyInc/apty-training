const output = document.getElementById('output');

function generatePyramid() {
    const rows = Number(document.getElementById('rows').value);

    let x = "";
    for (let i=1; i<=rows; i++) {
        for (let j=1; j<=rows-i; j++) {
            x += " ";
        }
        for (let k=1; k<=(2*i)-1; k++) {
            x += "*";
        }
        x += "\n";
    }

    output.innerText = x;
}