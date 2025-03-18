function calculateSI() {
    let pa = parseInt(document.getElementById("num1").value)
    let time = parseInt(document.getElementById("num2").value)
    let rate = parseInt(document.getElementById("num3").value)
    let si;
    si=(pa*(time)*rate)/100
    document.getElementById("res").textContent = `SI is: ${si}`
}