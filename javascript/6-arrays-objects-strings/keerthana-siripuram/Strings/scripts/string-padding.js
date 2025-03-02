function stringPadding() {
    let str = (document.getElementById("str").value).trim()
    let len = str.length
    let padding = "0"
    let paddedStr = str + padding.repeat(10 - len)
    document.getElementById("res").innerHTML = `String Padding with Zeros:${paddedStr}`
}