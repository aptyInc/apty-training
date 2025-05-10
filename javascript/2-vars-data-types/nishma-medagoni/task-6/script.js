function displayTemplateLiterals() {
    
    let stringVar = "John";          // String
    let numberVar = 25;             // Number
    let booleanVar = true;          // Boolean
    let undefinedVar;               // Undefined
    let nullVar = null;             // Null
    let symbolVar = Symbol("id");   // Symbol
    let objectVar = {               // Object
        key: "value"
    };

   
    let result = `
        <p>Hello, my name is ${stringVar} and I am ${numberVar} years old.</p>
        <p>Boolean value: ${booleanVar}</p>
        <p>Undefined variable: ${undefinedVar}</p>
        <p>Null variable: ${nullVar}</p>
        <p>Symbol: ${symbolVar.toString()}</p>
        <p>Object value: ${JSON.stringify(objectVar)}</p>
    `;

    document.getElementById("output").innerHTML = result;
}
