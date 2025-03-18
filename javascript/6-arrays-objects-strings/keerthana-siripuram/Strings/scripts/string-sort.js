function sortString() {
    let str = (document.getElementById("str").value).trim()
    let sortedStr = str.split('').sort().join('')
    document.getElementById("res").innerHTML = `Sorted String is:${sortedStr}`

}