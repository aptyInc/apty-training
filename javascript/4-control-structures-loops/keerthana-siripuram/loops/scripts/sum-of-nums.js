function genSumOfNumbers() {
    let res = 0;
    let num = parseInt(document.getElementById("num").value)
    let i = 0;
    while (i <= num) {
        res += i
        i++
    }
    document.getElementById("res").textContent = `Result is:${res}`
}