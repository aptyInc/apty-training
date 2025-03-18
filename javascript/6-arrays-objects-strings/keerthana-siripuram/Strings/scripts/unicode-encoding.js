function unicodeEncoding() {
    let str = document.getElementById("str").value
    let arr=Array.from(str)
    for (const ele of arr) {
        let encodedValue=ele.charCodeAt(0)
        document.getElementById("res").innerHTML += `Encoding val for ${ele} is ${encodedValue}<br>`
    }
}