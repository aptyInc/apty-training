function genFactorialOfANumber() {
    let res = 1;
    let num = parseInt(document.getElementById("num").value)
    let i = 1;
    let calculationSteps = ''
    do {
        res = res * i
        if (i === 1) {
            calculationSteps = `${i}`
        }
        else {
            calculationSteps += `* ${i}`
        }
        i += 1
    }
    while (i <= num);
    document.getElementById("res").textContent = `Result is:${res}`
    document.getElementById("calculations").innerHTML = `Calculation Steps:<br>${calculationSteps}`
}