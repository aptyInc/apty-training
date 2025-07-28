function higherOrdFun() {
    let str = document.getElementById("str").value
    let num = parseInt(document.getElementById("num").value)
    callHigherOrdFun(num, str, addListItem)
}
function callHigherOrdFun(num, str, callback) {
    callback(str, num)
}
function addListItem(str, num) {
    for (let i = 0; i < num; i++) {
        document.getElementById("res").innerHTML += `<ul><li>${str}</li><ul><br>`
    }

}