function genArraySum(...arr) {
    let arrSum = 0
    for (const num of arr) {
        arrSum += num
    }
    return arrSum
}

function convertStrToArr(numStr) {
    let arr = numStr.trim().split(" ").map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
    return arr
}

document.getElementById("form-sum").addEventListener("submit", function (event) {
    event.preventDefault()
    let numStr = document.getElementById("str").value
    let arr = convertStrToArr(numStr)
    const sum = genArraySum(...arr)
    document.getElementById("sum").innerText = `Sum of Arr is:${sum}`
})