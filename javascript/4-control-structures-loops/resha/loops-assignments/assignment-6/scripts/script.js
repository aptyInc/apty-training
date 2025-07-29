const output = document.getElementById('output');

function generatePrime() {
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);

    for (let i=x; i<=y; i++) {
        if (i < 2) continue;
        let flag = true;

        for (let j=2; j<i; j++) {
            if(i % j === 0) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
            output.innerText += `${i}\n`;
        }
    }
}