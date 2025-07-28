function calculateLengthOfWord() {
    let str = (document.getElementById("str").value).trim()
    let arr = str.split(" ")
    for (const ele of arr) {
        document.getElementById("res").innerHTML += `Length of Each Word is:${ele.length}<br>`
    }
}