function displayTemplateLiterals() {
    let num = 1;
    let str = "Hello, World!";
    let bool = true;
    let obj = { key: "value" };
    let arr = [1, 2, 3];
    let n = null;
    let undef = undefined;
    let sym = Symbol("symbol");

    let combinedString = `
    Number: ${num}
    String: ${str}
    Boolean: ${bool}
    Object: ${JSON.stringify(obj)}
    Array: ${arr}
    Null: ${n}
    Undefined: ${undef}
    Symbol: ${sym.toString()}
    `;

    document.getElementById("res").innerText = combinedString
}