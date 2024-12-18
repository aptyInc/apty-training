function swapVariables() {

    var a = 10, b = 20;
    [a, b] = [b, a];

    document.getElementById("result").innerText = "a = " + a + ", b = " + b;

    
}
