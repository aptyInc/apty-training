document.addEventListener("DOMContentLoaded", function () {
    // Original Variables
    let str = "467"; // String
    let num = 38;    // Number
    let bool = true; // Boolean
    let undef;       // Undefined
    let nullVal = null; // Null
    let sym = Symbol("sym"); // Symbol
    let obj = { name: "anu" }; // Object

    // Prepare the results
    let results = `
        Original Values and Types:<br>
        str: ${str} (Type: ${typeof str})<br>
        num: ${num} (Type: ${typeof num})<br>
        bool: ${bool} (Type: ${typeof bool})<br>
        undef: ${undef} (Type: ${typeof undef})<br>
        nullVal: ${nullVal} (Type: ${typeof nullVal})<br>
        sym: ${sym.toString()} (Type: ${typeof sym})<br>
        obj: ${JSON.stringify(obj)} (Type: ${typeof obj})<br><br>

        Type Conversions:<br>
        String to Number: ${Number(str)} (Type: ${typeof Number(str)})<br>
        Number to String: ${String(num)} (Type: ${typeof String(num)})<br>
        Boolean to String: ${String(bool)} (Type: ${typeof String(bool)})<br>
        Undefined to String: ${String(undef)} (Type: ${typeof String(undef)})<br>
        Null to String: ${String(nullVal)} (Type: ${typeof String(nullVal)})<br>
        Symbol to String: ${sym.toString()} (Type: ${typeof sym.toString()})<br>
        <br><br>

        Number to Boolean: ${Boolean(num)} (Type: ${typeof Boolean(num)})<br>
        String to Boolean: ${Boolean(str)} (Type: ${typeof Boolean(str)})<br>
        Null to Boolean: ${Boolean(nullVal)} (Type: ${typeof Boolean(nullVal)})<br>
        Undefined to Boolean: ${Boolean(undef)} (Type: ${typeof Boolean(undef)})<br>
        Object to Boolean: ${Boolean(obj)} (Type: ${typeof Boolean(obj)})<br>
    `;

    // Update the innerHTML of the 'demo' element
    document.getElementById("demo").innerHTML = results;
});

