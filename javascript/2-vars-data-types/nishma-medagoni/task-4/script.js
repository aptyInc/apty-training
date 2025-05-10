function typeConversions() {

    /* Original Data types */

    const stringVar = "555";
    const numberVar = 555;
    const booleanVar = true;
    let undefinedVar;
    const nullVar = null;
    const symbolVar = Symbol("unique");
    const objectVar = { key: "value" };

    /* function for converting data types */

    function conversion(value, data_type) {
        try {
            return data_type(value)
        }
        catch (error) {
            return `Error: ${error.message}`
        }
    }

    // Convert string

    document.getElementById("string").innerHTML = `
        String to Number: ${conversion(stringVar, Number)}<br>
        String to Boolean: ${conversion(stringVar, Boolean)}<br>
        String to Symbol: ${conversion(stringVar, Symbol)}<br>
        String to Object: ${conversion(stringVar, Object)}<br>
    `

    // Convert number

    document.getElementById("number").innerHTML = `
        Number to String: ${conversion(numberVar, String)} <br>
        Number to Boolean: ${conversion(numberVar, Boolean)} <br>
        Number to Object: ${conversion(numberVar, Object)}<br>
        Number to Symbol: ${conversion(numberVar, Symbol)}
    `

    // Convert boolean

    document.getElementById("boolean").innerHTML = `
        Boolean to String: ${conversion(booleanVar, String)} <br>
        Boolean to Number: ${conversion(booleanVar, Number)} <br>
        Boolean to Symbol: ${conversion(booleanVar, Symbol)} <br>
        Boolean to Object: ${conversion(booleanVar, Object)} <br>
    `

    // Convert Undefined

    document.getElementById("undefined").innerHTML = `
        Undefined to String: ${conversion(undefinedVar, String)} <br>
        Undefined to Number: ${conversion(undefinedVar, Number)} <br>
        Undefined to Boolean: ${conversion(undefinedVar, Boolean)}
    `

    // Convert Null

    document.getElementById("null").innerHTML = `
        Null to String: ${conversion(nullVar, String)} <br>
        Null to Number: ${conversion(nullVar, Number)} <br>
        Null to Boolean: ${conversion(nullVar, Boolean)}
    `

    // Convert Symbol

    document.getElementById("symbol").innerHTML = `
        Symbol to String: ${conversion(symbolVar, String)} <br>
        Symbol to Object: ${conversion(symbolVar, Object)} <br>
        Symbol to Boolean: ${conversion(symbolVar, Boolean)}
    `

    // Convert Object

    document.getElementById("object").innerHTML = `
        Object to String: ${conversion(objectVar, String)} <br>
        Object to Number: ${conversion(objectVar, Number)} <br>
        Object to Boolean: ${conversion(objectVar, Boolean)}
    `
    
}
