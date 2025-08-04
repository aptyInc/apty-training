const output = document.getElementById('output');

function generate() {
    const n = Number(document.getElementById('n').value);
    fibDisplay(n);

    function fibDisplay(n) {
        let res = '';
        for (let i = 0; i < n; i++) {
            res += fibCalculate(i) + ' ';
        }
        output.innerText = `Result: ${res}`;
    }

    function fibCalculate(x) {
        if (x <= 1) {
            return x;
        }
        return fibCalculate(x - 1) + fibCalculate(x - 2);
    }
}


