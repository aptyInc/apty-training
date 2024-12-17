function convertValue(value, type) {
    if (type === "number") 
        return Number(value);
    if (type === "boolean") 
        return value.toLowerCase() === "true";
    if (type === "null") 
        return null;
    if (type === "undefined") 
        return undefined;
    if (type === "object") {
        const val=Object(value);
        return val;
    }
    return value; 
}
function getValue(){
    const value1=document.getElementById("value1").value;
    const value2=document.getElementById("value2").value;
    const type1=document.getElementById("type1").value;
    const type2=document.getElementById("type2").value;
    const convert1=convertValue(value1,type1);
    const convert2=convertValue(value2,type2);
    return [convert1,convert2];
}

// AND Operator
function andOperator() {
    const [val1,val2] =getValue();
    const result = val1 && val2;
    document.getElementById('output').innerText = `Result: ${val1} && ${val2} = ${result}`;
}

// OR Operator
function orOperator() {
    const [val1,val2] = getValue();
    const result = val1 || val2;
    document.getElementById('output').innerText = `Result: ${val1} || ${val2} = ${result}`;
}

// NOT Operator
function notOperator() {
    const val1 = getValue();
    const result = !val1;
    document.getElementById('output').innerText = `Result: !${val1} = ${result}`;
}