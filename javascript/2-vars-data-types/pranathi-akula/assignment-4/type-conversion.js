let name = "Hello This is Pranathi"; //string
let age = 24; //number
let intrested = true; //boolean
let undefinedVar; //undefined
let nullvar = null; //null
let symbolVar = Symbol("output"); //symbol
let objectVar = { name: "pranathi" }; //object

let output = ` 
            <h3>String Conversions:</h3>
            String to Number: ${Number(name)} <br>
            String to Boolean: ${Boolean(name)}<br>
            String to Object: ${Object(name)}<br>
            String to Symbol: ${String(Symbol(name))} <br><br>

            <h3>Number Conversions:</h3>
            Number to String: ${String(age)}<br>
            Number to Boolean: ${Boolean(age)}<br>
            Number to Object: ${Object(age)}<br><br>

            <h3>Boolean Conversions:</h3>
            Boolean to String: ${String(intrested)}<br>
            Boolean to Number: ${Number(intrested)}<br>
            Boolean to Object: ${Object(intrested)}<br><br>

            <h3>Undefined Conversions:</h3>
            Undefined to String: ${String(undefinedVar)}<br>
            Undefined to Number: ${Number(undefinedVar)}<br>
            Undefined to Boolean: ${Boolean(undefinedVar)}<br>
            Undefined to Object: ${Object(undefinedVar)}<br><br>

            <h3>Null Conversions:</h3>
            Null to String: ${String(nullvar)}<br>
            Null to Number: ${Number(nullvar)}<br>
            Null to Boolean: ${Boolean(nullvar)}<br>
            Null to Object: ${Object(nullvar)}<br><br>

            <h3>Symbol Conversions:</h3>
            Symbol to String: ${symbolVar.toString()}<br>
            Symbol to Boolean: ${Boolean(symbolVar)}<br><br>

            <h3>Object Conversions:</h3>
            Object to String: ${String(objectVar)}<br>
            Object to Number: ${Number(objectVar)}<br>
            Object to Boolean: ${Boolean(objectVar)}<br>
      `;

document.getElementById("output").innerHTML = output;
