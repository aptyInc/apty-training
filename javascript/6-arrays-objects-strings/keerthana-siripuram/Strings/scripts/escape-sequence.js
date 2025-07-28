function escapeString() {
    let str = document.getElementById("str").value
    let escapedString=str.replace(/\n/g,"\\n").replace(/\t/g,"\\t")
    document.getElementById('res').innerText=escapedString
}
