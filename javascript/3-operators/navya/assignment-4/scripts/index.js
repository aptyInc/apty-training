const ui = {
    aVal: document.getElementById("inputA"),
    bVal: document.getElementById("inputB"),
    aType: document.getElementById("kindA"),
    bType: document.getElementById("kindB"),
    output: document.getElementById("display"),
};

function castToType(raw, type) {
    if (type === "number") return Number(raw);
    if (type === "boolean") return String(raw).toLowerCase() === "true";
    return String(raw);
}

function readBoth() {
    const first = castToType(ui.aVal.value, ui.aType.value);
    const second = castToType(ui.bVal.value, ui.bType.value);
    return [first, second];
}

function runAnd() {
    const [left, right] = readBoth();
    ui.output.textContent = `Output: ${left && right}`;
}

function runOr() {
    const [left, right] = readBoth();
    ui.output.textContent = `Output: ${left || right}`;
}

function runNot() {
    const left = castToType(ui.aVal.value, ui.aType.value);
    ui.output.textContent = `Output: ${!left}`;
}
