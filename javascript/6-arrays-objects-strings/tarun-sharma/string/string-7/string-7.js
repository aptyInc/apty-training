function string() {

    var input = document.getElementById("string").value;
    var paddedString = input.padStart(10, "0");

    document.getElementById("result").innerText = paddedString;

}
