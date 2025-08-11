function generatePyramid() {
    const rows = parseInt(document.getElementById('rows').value)

    if (isNaN(rows) || rows <= 0) {
        document.getElementById('result').innerText = 'Please enter a valid positive number of rows.';
        return
    }

    let pattern = ''

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= rows - i; j++){
            pattern += '  '
        }

        for (let k = 1; k<=2*i-1; k++){
            pattern += "*"
        }

        //Move to next line
        pattern += '\n'
    }

    document.getElementById('result').innerText = pattern;
}