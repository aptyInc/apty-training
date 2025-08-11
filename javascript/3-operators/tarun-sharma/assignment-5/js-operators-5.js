//took help of chat gpt to write this code

function logicalAndAssignment() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    let convertedValue1 = convertValue(value1, type1);
    let convertedValue2 = convertValue(value2, type2);
   
    convertedValue1 &&= convertedValue2;
    document.getElementById("output").textContent = `<= : ${convertedValue1}`;
}

function logicalOrAssignment() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    let convertedValue1 = convertValue(value1, type1);
    let convertedValue2 = convertValue(value2, type2);
   
    convertedValue1 ||= convertedValue2;
    document.getElementById("output").textContent = `<= : ${convertedValue1}`;
}

function nullish() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    const type1 = document.getElementById("type1").value;
    const type2 = document.getElementById("type2").value;
   
    let convertedValue1 = convertValue(value1, type1);
    let convertedValue2 = convertValue(value2, type2);
   
    convertedValue1 ??= convertedValue2;
    document.getElementById("output").textContent = `<= : ${convertedValue1}`;
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



