let arr = ["Red", "Blue", "Green", "Yellow"]
function replaceBlueWithPurple() {
    arr.splice(1, 1, "Purple")
    displayArr()
}
function addOrangeAfterYellow() {
    arr.splice(arr.length, 0, "Orange")
    displayArr()
}
function removeGreen() {
    arr.splice(2, 1)
    displayArr()
}
function displayArr() {
    let arrElements = arr.slice(0)
    document.getElementById("res").textContent = `Result:${arrElements}`
}