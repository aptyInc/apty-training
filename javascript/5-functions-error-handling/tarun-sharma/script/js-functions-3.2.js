function outerFunction(var1) {

    return function middleFunction(var2) {
        return function innerFunction(var3) {

            
            return `Outer: ${var1}, Middle: ${var2}, Inner: ${var3}`;

        };
    };
    
}


function displayResult() {
   
    let var1 = document.getElementById("var1").value || "Default1";
    let var2 = document.getElementById("var2").value || "Default2";

    let var3 = document.getElementById("var3").value || "Default3";

    let result = outerFunction(var1)(var2)(var3);

    
    document.getElementById("result").innerText = result;

}