//took help of chat gpt to write this code

function and() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result = convertedValue1 & convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}

function or() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result = convertedValue1 | convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}

function xor() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result = convertedValue1 ^ convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}

function not() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result =  ~convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}


function leftShift() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result = convertedValue1 << convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}

function rightShift() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);
   
    const result = convertedValue1 >> convertedValue2;
    document.getElementById("output").textContent = `<= : ${result}`;
}


function convertValue(value, type) {
    if (type === "number") {
        return Number(value);
    } else if (type === "boolean") {
        return value.toLowerCase() === "true";
    } else {
        return value;
    }
}



