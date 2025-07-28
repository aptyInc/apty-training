function filterEvenNums() {
    let inputNumStr = document.getElementById("num-str").value
    let inputArr = inputNumStr.trim().split(" ")
    let evenNums = inputArr.filter((num) => num % 2 == 0)
    document.getElementById("even-nums").innerText = `Even Nums are:${evenNums}`
    return evenNums
}
function doubleFilteredNums() {
    let evenNums = filterEvenNums()
    let doubleNums = evenNums.map((num) => num * 2)
    document.getElementById("double-nums").innerText = `Doubled Filtered Nums are:${doubleNums}`
    return doubleNums
}
function sumOfFilteredNums() {
    let doubleNums = doubleFilteredNums()
    let totSum = doubleNums.reduce((tot, num) => tot + num, 0)
    document.getElementById("tot-sum").innerText = `Tot sum of Filetred Nums :${totSum}`
}