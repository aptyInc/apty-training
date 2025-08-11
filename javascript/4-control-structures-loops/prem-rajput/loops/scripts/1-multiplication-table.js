function generateTable() {
    var num = document.getElementById("number").value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    for (var i = 1; i <= 10; i++) {
        resultDiv.innerHTML += num + " x " + i + " = " + num * i + "<br>";
    }
}
