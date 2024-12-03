


let myString = "5";
        let myNumber = 10;
        let myBooleanTrue = true;
        let myBooleanFalse = false;
        let myUndefined;
        let myNull = null;
        let mySymbol = Symbol("unique");
        let myObject = { key: "value" };

        let results = `
            String + String: ${myString + myString} <br>
            String + Number:${myString + myNumber} <br>
            String + Boolean (true): ${myString + myBooleanTrue} <br>
            String + Boolean (false):${myString + myBooleanFalse} <br>
            String + Undefined: ${myString + myUndefined} <br>
            String + Null: ${myString + myNull} <br>
            String + Symbol:</strong> ${(myString + mySymbol.toString())} <br>
            String + Object:</strong> ${myString + JSON.stringify(myObject)} <br><br>
        `;

    
        document.getElementById("coercion").innerHTML = results;
