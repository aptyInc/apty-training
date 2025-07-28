function fetchInput() {
    let firstNum = parseInt(document.getElementById("num1").value)
    let secNum = parseInt(document.getElementById("num2").value)
    let inputArr = [firstNum, secNum]
    return inputArr
}
function bitWiseAnd()
{
    const [firstNum, secNum,] = fetchInput()
    let res= firstNum & secNum
    document.getElementById("res").innerText=`Result:${res}`
}
function bitWiseOr()
{
    const [firstNum, secNum,] = fetchInput()
    let res= firstNum | secNum
    document.getElementById("res").innerText=`Result:${res}`
}
function bitWiseNot()
{
    const [firstNum] = fetchInput()
    let res= ~firstNum
    document.getElementById("res").innerText=`Result:${res}`
}
function bitWiseXor()
{
    const [firstNum, secNum,] = fetchInput()
    let res= firstNum ^ secNum
    document.getElementById("res").innerText=`Result:${res}`
}
function bitWiseLeftShift()
{
    const [firstNum, secNum,] = fetchInput()
    let res= firstNum << secNum
    document.getElementById("res").innerText=`Result:${res}`
}
function bitWiseRightShift()
{
    const [firstNum, secNum,] = fetchInput()
    let res= firstNum >> secNum
    document.getElementById("res").innerText=`Result:${res}`
}

