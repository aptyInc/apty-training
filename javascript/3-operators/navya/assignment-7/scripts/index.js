const out = document.getElementById("out");

function readNums() {
    const aRaw = document.getElementById("v1").value;
    const bRaw = document.getElementById("v2").value;

    const aNum = Number(aRaw);
    const bNum = Number(bRaw);

    if (Number.isNaN(aNum) || Number.isNaN(bNum)) {
        throw new Error("Please enter valid numbers in both fields.");
    }
    return [aNum | 0, bNum | 0];
}

function show(text) {
    out.textContent = text;
}


function andOp() {
    try {
        const [a, b] = readNums();
        show(`${a} & ${b} = ${a & b}`);
    } catch (e) {
        show(e.message);
    }
}

function orOp() {
    try {
        const [a, b] = readNums();
        show(`${a} | ${b} = ${a | b}`);
    } catch (e) {
        show(e.message);
    }
}

function xorOp() {
    try {
        const [a, b] = readNums();
        show(`${a} ^ ${b} = ${a ^ b}`);
    } catch (e) {
        show(e.message);
    }
}

function notOp() {
    try {
        const [a, b] = readNums();
        show(`~${a} = ${~a},  ~${b} = ${~b}`);
    } catch (e) {
        show(e.message);
    }
}

function lshiftOp() {
    try {
        const [a, b] = readNums();
        show(`${a} << ${b} = ${a << b}`);
    } catch (e) {
        show(e.message);
    }
}

function rshiftOp() {
    try {
        const [a, b] = readNums();
        show(`${a} >> ${b} = ${a >> b}`);
    } catch (e) {
        show(e.message);
    }
}
