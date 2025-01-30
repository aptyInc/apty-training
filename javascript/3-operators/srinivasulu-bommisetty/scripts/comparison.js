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


function compareEquality(val1, val2) {
    return val1 == val2;
}

function compareStrictEquality(val1, val2) {
    return val1 === val2;
}

function compareInequality(val1, val2) {
    return val1 != val2;
}

function compareStrictInequality(val1, val2) {
    return val1 !== val2;
}

function compareGreaterThan(val1, val2) {
    return val1 > val2;
}

function compareLessThan(val1, val2) {
    return val1 < val2;
}

function compareGreaterThanOrEqual(val1, val2) {
    return val1 >= val2;
}

function compareLessThanOrEqual(val1, val2) {
    return val1 <= val2;
}


function compareValues(operator) {
  
    const value1 = document.getElementById('value1').value;
    const type1 = document.getElementById('type1').value;
    const value2 = document.getElementById('value2').value;
    const type2 = document.getElementById('type2').value;

 
    const convertedValue1 = convertValue(value1, type1);
    const convertedValue2 = convertValue(value2, type2);

    let result;

    switch (operator) {
        case '==':
            result = compareEquality(convertedValue1, convertedValue2);
            break;
        case '===':
            result = compareStrictEquality(convertedValue1, convertedValue2);
            break;
        case '!=':
            result = compareInequality(convertedValue1, convertedValue2);
            break;
        case '!==':
            result = compareStrictInequality(convertedValue1, convertedValue2);
            break;
        case '>':
            result = compareGreaterThan(convertedValue1, convertedValue2);
            break;
        case '<':
            result = compareLessThan(convertedValue1, convertedValue2);
            break;
        case '>=':
            result = compareGreaterThanOrEqual(convertedValue1, convertedValue2);
            break;
        case '<=':
            result = compareLessThanOrEqual(convertedValue1, convertedValue2);
            break;
        default:
            result = 'Invalid operator';
    }
    document.getElementById('resultValue').innerText = result;
}