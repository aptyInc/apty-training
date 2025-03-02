let arr = ['Keerthana', 'Anil', 'kikki', 'Agnes']
function sliceThreeElements() {
    let threeSlicedEles = arr.slice(0, 3)
    document.getElementById("res").textContent = `Sliced 3 Elements:${threeSlicedEles}`
}
function sliceLastTwoElements() {
    let twoSlicedElesFromLast = arr.slice(-2)
    document.getElementById("res").textContent = `Sliced 2 Elements:${twoSlicedElesFromLast}`
}