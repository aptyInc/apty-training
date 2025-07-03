function convertToUpperCase() {
    let str = document.getElementById("str").value
    if (str == "") {
        handleDefault(upperCaseConverter)
    }
    else {
        handleDefault(upperCaseConverter, str)
    }
}
function handleDefault(callback, str = "Keerthana") {
    callback(str)
}
function upperCaseConverter(str) {
    console.log(str, typeof (str))
    const convertedWord = str.toUpperCase()
    document.getElementById("res").textContent = `Converted to UpperCase: ${convertedWord}`
}