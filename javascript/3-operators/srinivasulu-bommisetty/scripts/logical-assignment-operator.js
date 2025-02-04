function convertValue(value, type) {
    switch (type) {
        case 'string':
            return String(value);
        case 'number':
            return Number(value);
        case 'boolean':
            return value.toLowerCase() === 'true';
        case 'null':
            return value.toLowerCase() === 'null' ? null : value;
        default:
            return value;
    }
}

function performOperation(operator) {
  
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

  
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    let result;

    
    switch (operator) {
        case '&&=':
            result = convertedValue1 && convertedValue2;
            break;
        case '||=':
            result = convertedValue1 || convertedValue2;
            break;
        case '??=':
            result = convertedValue1 ?? convertedValue2;
            break;
        default:
            result = 'Invalid operator';
    }
    document.getElementById('resultValue').innerText = result;
}