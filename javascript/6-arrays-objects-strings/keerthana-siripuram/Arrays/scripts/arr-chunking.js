
function convertStrToArr(input) {
    let arr = input.trim().split(" ")
    return arr
}
function chunkArrayBySize() {
    let input = document.getElementById("str").value
    let chunkSize = parseInt(document.getElementById("chunk-size").value)
    let newArray = convertStrToArr(input)
    let res = chunckArray(newArray, chunkSize)
    document.getElementById("res").innerText = `[`
    for (const arr of res) {
        document.getElementById("res").innerText += `[ ${arr} ]`
    }
    document.getElementById("res").innerText += `]`
}
function chunckArray(newArray, chunkSize) {
    let res = []
    for (let ind = 0; ind < newArray.length; ind = ind + chunkSize) {
        let start = ind
        let end = ind + chunkSize
        let slicedArr = []
        if (end > newArray.length) {
            slicedArr = newArray.slice(start)
        }
        else {
            slicedArr = newArray.slice(ind, ind + chunkSize)
        }

        res.push(slicedArr)

    }
    return res
}