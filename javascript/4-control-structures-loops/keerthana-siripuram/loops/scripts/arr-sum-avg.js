function convertStrToArr() {
    let str = document.getElementById("str").value
    arr = str.split(",")
    return arr
}
function genArraySum() {
    let arrSum = 0
    arr = convertStrToArr()
    for (const str of arr) {
        arrSum += +str
    }
    document.getElementById("sum").textContent = `Sum is:${arrSum}`
    return arrSum
}
function genArrayAvg() {
    let arrAvg = 0;
    let sm = genArraySum()
    arrAvg = sm / arr.length
    document.getElementById("avg").textContent = `Avg is:${arrAvg}`
}