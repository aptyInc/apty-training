function convertStrToArr() {
    let str = document.getElementById("str").value
    let arr = str.trim().split(" ")
    return arr
}
function joinArray() {
    let arr = convertStrToArr()
    let newStr = arr.join(' ')
    let capitalizeStr = newStr.slice(0, 1).toUpperCase() + newStr.slice(1)
    document.getElementById("res").textContent = `Capitalized String is:${capitalizeStr}`
}