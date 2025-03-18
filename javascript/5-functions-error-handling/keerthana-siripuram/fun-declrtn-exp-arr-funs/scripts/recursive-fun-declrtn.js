function genFibonacciSeries() {
    let num = parseInt(document.getElementById("num").value)
    let res = ""
    for (let i = 1; i <= num; i++) {
        let fibNum = genFibonacci(i)
        res = res + `${fibNum},`
        document.getElementById("res").innerText = res
    }

}
function genFibonacci(num) {
    if (num == 0) return 0
    if (num == 1) return 1
    return genFibonacci(num - 1) + genFibonacci(num - 2)
}