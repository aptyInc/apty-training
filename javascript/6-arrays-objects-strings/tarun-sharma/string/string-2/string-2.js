function firstAndLast() {

    var input = document.getElementById("inputString").value;

    var result = input ? input[0] + " " + input[input.length - 1] : null;

    document.getElementById("result").innerText = result;

    
}
