document.addEventListener("DOMContentLoaded", function () {
    // Define variables of different data types
    let str = "10"; // String
    let num = 5; // Number
    let bool = true; // Boolean
    let undef; // Undefined
    let n = null; // Null
    let sym = Symbol("sym"); // Symbol
    let obj = { name: "anu" }; // Object

    // Perform addition with type coercion
    let results = ` 
        String + Number: ${str + num} (Type: ${typeof (str + num)})<br>
        String + Boolean: ${str + bool} (Type: ${typeof (str + bool)})<br>
        String + Undefined: ${str + undef} (Type: ${typeof (str + undef)})<br>
        String + Null: ${str + n} (Type: ${typeof (str + n)})<br>
        String + Symbol: Error (Cannot coerce Symbol)<br>
        String + Object: ${str + obj} (Type: ${typeof (str + obj)})<br><br>

        Number + String: ${num + str} (Type: ${typeof (num + str)})<br>
        Number + Boolean: ${num + bool} (Type: ${typeof (num + bool)})<br>
        Number + Undefined: ${num + undef} (Type: ${typeof (num + undef)})<br>
        Number + Null: ${num + n} (Type: ${typeof (num + n)})<br>
        Number + Symbol: Error (Cannot coerce Symbol)<br>
        Number + Object: ${num + obj} (Type: ${typeof (num + obj)})<br><br>

        Boolean + String: ${bool + str} (Type: ${typeof (bool + str)})<br>
        Boolean + Number: ${bool + num} (Type: ${typeof (bool + num)})<br>
        Boolean + Undefined: ${bool + undef} (Type: ${typeof (bool + undef)})<br>
        Boolean + Null: ${bool + n} (Type: ${typeof (bool + n)})<br>
        Boolean + Symbol: Error (Cannot coerce Symbol)<br>
        Boolean + Object: ${bool + obj} (Type: ${typeof (bool + obj)})<br><br>

        Undefined + String: ${undef + str} (Type: ${typeof (undef + str)})<br>
        Undefined + Number: ${undef + num} (Type: ${typeof (undef + num)})<br>
        Undefined + Boolean: ${undef + bool} (Type: ${typeof (undef + bool)})<br>
        Undefined + Null: ${undef + n} (Type: ${typeof (undef + n)})<br>
        Undefined + Symbol: Error (Cannot coerce Symbol)<br>
        Undefined + Object: ${undef + obj} (Type: ${typeof (undef + obj)})<br><br>

        Null + String: ${n + str} (Type: ${typeof (n + str)})<br>
        Null + Number: ${n + num} (Type: ${typeof (n + num)})<br>
        Null + Boolean: ${n + bool} (Type: ${typeof (n + bool)})<br>
        Null + Undefined: ${n + undef} (Type: ${typeof (n + undef)})<br>
        Null + Symbol: Error (Cannot coerce Symbol)<br>
        Null + Object: ${n + obj} (Type: ${typeof (n + obj)})<br><br>

        Object + String: ${obj + str} (Type: ${typeof (obj + str)})<br>
        Object + Number: ${obj + num} (Type: ${typeof (obj + num)})<br>
        Object + Boolean: ${obj + bool} (Type: ${typeof (obj + bool)})<br>
        Object + Undefined: ${obj + undef} (Type: ${typeof (obj + undef)})<br>
        Object + Null: ${obj + n} (Type: ${typeof (obj + n)})<br>
        Object + Symbol: Error (Cannot coerce Symbol)<br>
    `;

    // Display the results in the HTML page
    document.getElementById("demo").innerHTML = results;
});
