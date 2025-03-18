function convertStrToArr(numStr) {
    let arr = numStr.trim().split(" ").map(num => parseFloat(num.trim())).filter(num => !isNaN(num))
    return arr
}
document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault()
    let numStr = document.getElementById("str").value
    let limit = parseInt(document.getElementById("num").value)
    let arr = convertStrToArr(numStr)
    callHigherOrdFun(arr, limit, (arr, limit)=> {
        let filteredArr = arr.filter((ele)=>ele<=limit)
        document.getElementById("res").innerText = `Arr is:${filteredArr}`
    })
    function callHigherOrdFun(arr, limit, callback) {
        callback(arr, limit)
    }
})