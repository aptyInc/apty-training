function logAdditionResult(a, b) {
    try {
        document.write(`${typeof a} + ${typeof b} = ${a + b} <br>`);
    } catch (error) {
        document.write(`Error: ${error.message} <br>`);
    }
}

// Data types
const types = [
    { type: 'String', value: 'Hello' },
    { type: 'Number', value: 5 },
    { type: 'Boolean', value: true },
    { type: 'Undefined', value: undefined },
    { type: 'Null', value: null },
    { type: 'Symbol', value: Symbol('test') },
    { type: 'Object', value: {} }
];

//  adding 
for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < types.length; j++) {
        const a = types[i].value;
        const b = types[j].value;
        logAdditionResult(a, b);
    }
    document.write(`<br>`)
}