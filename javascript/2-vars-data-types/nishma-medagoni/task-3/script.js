function datatypes() {
    const stringVar = "Hello, World!";       
    const numberVar = 5;                   
    const booleanVar = true;                
    let undefinedVar;                       
    const nullVar = null;                   
    const symbolVar = Symbol("unique");     
    const objectVar = { key: "value" }; 

    document.getElementById("string-var").innerText += `  ${typeof stringVar}`
    document.getElementById("number-var").innerText += `  ${typeof numberVar}`
    document.getElementById("boolean-var").innerText += `  ${typeof booleanVar}`
    document.getElementById("undefined-var").innerText += ` ${typeof undefinedVar}`
    document.getElementById("null-var").innerText += `  ${typeof nullVar}`
    document.getElementById("symbol-var").innerText += `  ${typeof symbolVar}`
    document.getElementById("object-var").innerText += `  ${typeof objectVar}`

}