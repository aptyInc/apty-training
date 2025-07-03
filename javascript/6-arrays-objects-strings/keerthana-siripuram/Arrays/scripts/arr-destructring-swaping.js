function swapNumbers() {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    const arr = [firstNum, secNum]
    const [b, a] = arr
    document.getElementById("beforeSwap").innerHTML = `A value is: ${firstNum}<br> B value is ${secNum}`
    document.getElementById("afterSwap").innerHTML = `A value is: ${a}<br> B value is ${b}`
}