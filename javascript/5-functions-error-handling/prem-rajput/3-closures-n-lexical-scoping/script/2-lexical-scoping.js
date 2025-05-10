function outerFunction(var1) {
    function middleFunction(var2) {
        function innerFunction(var3) {
        return `Outer: ${var1}, Middle: ${var2}, Inner: ${var3}`;
        }
        return innerFunction;
    }
    return middleFunction;
}

function generateOutput() {
    const var1 = document.getElementById("var1").value || "Default1";
    const var2 = document.getElementById("var2").value || "Default2";
    const var3 = document.getElementById("var3").value || "Default3";

    const result = outerFunction(var1)(var2)(var3);
    document.getElementById("result").innerText = result;
}
