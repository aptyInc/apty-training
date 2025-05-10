function sortString() {

    var input = document.getElementById("inputString").value;
    var result = input.split("").sort().join("");
    
    document.getElementById("result").innerText = result;

}
