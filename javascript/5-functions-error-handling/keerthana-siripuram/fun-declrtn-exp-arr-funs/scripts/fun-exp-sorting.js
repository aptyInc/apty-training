
function convertStrToArr(numStr) {
    let arr = numStr.trim().split(" ")
    return arr
}
document.getElementById("sort-form").addEventListener("submit", function (event) {
    event.preventDefault()
    let numStr = document.getElementById("str").value
    let arr = convertStrToArr(numStr)
    let sortedArr = arr.sort((a, b) => a - b)
    document.getElementById("res").innerText = `Sorted Arr :${sortedArr}`
})