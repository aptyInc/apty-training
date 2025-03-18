function findLargest() {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    let thirdNum = parseInt(document.getElementById("num3").value)
    let res;
    if (firstNum > secNum) {
        if (firstNum > thirdNum) {
            res = firstNum
        }
        else {
            res = thirdNum
        }
    }
    else {
        if (secNum > thirdNum) {
            res = secNum
        }
        else {
            res = thirdNum
        }
    }
    document.getElementById("res").textContent = `Largest is: ${res}`
}