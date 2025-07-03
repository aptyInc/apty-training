function findFirstAndLastChar() {
    let str = document.getElementById("str").value
    if (str.length == 0) {
        document.getElementById("res").innerHTML = "String is Empty:null"
    }
    else {
        let firstChar = str.at(0)
        let lastChar = str.at(-1)
        document.getElementById("res").innerHTML += `<p>First Char is:${firstChar}`
        document.getElementById("res").innerHTML += `<p>Last Char is:${lastChar}`
    }
}