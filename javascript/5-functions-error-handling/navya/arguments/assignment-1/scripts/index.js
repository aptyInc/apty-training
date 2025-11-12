const resultBox = document.getElementById("resultBox");


function rectangleArea(len = 5, wid = 2) {
    return len * wid;
}

function computeArea() {
    const lVal = document.getElementById("length").value;
    const wVal = document.getElementById("width").value;

    const length = lVal ? Number(lVal) : undefined;
    const width = wVal ? Number(wVal) : undefined;

    const area = rectangleArea(length, width);

    resultBox.textContent = `Area: ${area}`;
}
