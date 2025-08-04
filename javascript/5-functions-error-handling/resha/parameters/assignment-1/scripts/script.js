function calculate(l=3 ,b=5) {
    return l*b;
}

function getValues() {
    const output = document.getElementById('output');
    const length = document.getElementById('length').value;
    const breadth = document.getElementById('breadth').value;

    const l = length === "" ? undefined : Number(length);
    const b = breadth === "" ? undefined : Number(breadth);

    const res = calculate(l,b);
    console.log(res);
    
    output.innerText = `Result: ${res}`;

}