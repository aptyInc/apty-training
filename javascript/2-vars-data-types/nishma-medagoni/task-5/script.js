function typecoercion() {
    const stringVar = "100";
    const numberVar = 55;
    const booleanVar = true;
    let undefinedVar;
    const nullVar = null;
    const symbolVar = Symbol("unique");
    const objectVar = { key: "value" };

    const addition = (a, b) => {
        try {
            return a + b;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }

    document.getElementById("string-add-others").innerHTML = `
        String + String: ${addition(stringVar, "World")} <br>
        String + Number: ${addition(stringVar, numberVar)} <br>
        String + Boolean: ${addition(stringVar, booleanVar)} <br>
        String + Undefined: ${addition(stringVar, undefinedVar)} <br>
        String + Null: ${addition(stringVar, nullVar)} <br>
        String + Symbol: ${addition(stringVar, symbolVar)} <br>
        String + Object: ${addition(stringVar, objectVar)} <br>
    `;

    document.getElementById("number-add-others").innerHTML = `
        Number + String: ${addition(numberVar, stringVar)} <br>
        Number + Number: ${addition(numberVar, 10)} <br>
        Number + Boolean: ${addition(numberVar, booleanVar)} <br>
        Number + Undefined: ${addition(numberVar, undefinedVar)} <br>
        Number + Null: ${addition(numberVar, nullVar)} <br>
        Number + Symbol: ${addition(numberVar, symbolVar)} <br>
        Number + Object: ${addition(numberVar, objectVar)} <br>
    `;

    document.getElementById("boolean-add-others").innerHTML = `
        Boolean + String: ${addition(booleanVar, stringVar)} <br>
        Boolean + Number: ${addition(booleanVar, numberVar)} <br>
        Boolean + Boolean: ${addition(booleanVar, false)} <br>
        Boolean + Undefined: ${addition(booleanVar, undefinedVar)} <br>
        Boolean + Null: ${addition(booleanVar, nullVar)} <br>
        Boolean + Symbol: ${addition(booleanVar, symbolVar)} <br>
        Boolean + Object: ${addition(booleanVar, objectVar)} <br>
    `;

    document.getElementById("undefined-add-others").innerHTML = `
        Undefined + String: ${addition(undefinedVar, stringVar)} <br>
        Undefined + Number: ${addition(undefinedVar, numberVar)} <br>
        Undefined + Boolean: ${addition(undefinedVar, booleanVar)} <br>
        Undefined + Undefined: ${addition(undefinedVar, undefinedVar)} <br>
        Undefined + Null: ${addition(undefinedVar, nullVar)} <br>
        Undefined + Symbol: ${addition(undefinedVar, symbolVar)} <br>
        Undefined + Object: ${addition(undefinedVar, objectVar)} <br>
    `;

    document.getElementById("null-add-others").innerHTML = `
        Null + String: ${addition(nullVar, stringVar)} <br>
        Null + Number: ${addition(nullVar, numberVar)} <br>
        Null + Boolean: ${addition(nullVar, booleanVar)} <br>
        Null + Undefined: ${addition(nullVar, undefinedVar)} <br>
        Null + Null: ${addition(nullVar, nullVar)} <br>
        Null + Symbol: ${addition(nullVar, symbolVar)} <br>
        Null + Object: ${addition(nullVar, objectVar)} <br>
    `;

    document.getElementById("symbol-add-others").innerHTML = `
        Symbol + String: ${addition(symbolVar, stringVar)} <br>
        Symbol + Number: ${addition(symbolVar, numberVar)} <br>
        Symbol + Boolean: ${addition(symbolVar, booleanVar)} <br>
        Symbol + Undefined: ${addition(symbolVar, undefinedVar)} <br>
        Symbol + Null: ${addition(symbolVar, nullVar)} <br>
        Symbol + Symbol: ${addition(symbolVar, Symbol("another"))} <br>
        Symbol + Object: ${addition(symbolVar, objectVar)} <br>
    `;

    document.getElementById("object-add-others").innerHTML = `
        Object + String: ${addition(objectVar, stringVar)} <br>
        Object + Number: ${addition(objectVar, numberVar)} <br>
        Object + Boolean: ${addition(objectVar, booleanVar)} <br>
        Object + Undefined: ${addition(objectVar, undefinedVar)} <br>
        Object + Null: ${addition(objectVar, nullVar)} <br>
        Object + Symbol: ${addition(objectVar, symbolVar)} <br>
        Object + Object: ${addition(objectVar, { anotherKey: "anotherValue" })} <br>
    `;
}