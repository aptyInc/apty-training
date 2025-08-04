function outer(l=2, b=5) {
    const peri = 2*(l+b);
    function inner() {
        const area = l*b;
        return area;
    }
    const area = inner();
    console.log(area + ' ' + peri);

    return { area, peri };
}

function getValues() {
    const output = document.getElementById('output');
    const length = document.getElementById('length').value;
    const breadth = document.getElementById('breadth').value;

    const l = length === '' ? undefined : Number(length);
    const b = breadth === '' ? undefined : Number(breadth);

    const { area, peri } = outer(l, b);
    output.innerText = `Result: ${area + ' ' + peri}`;
}


