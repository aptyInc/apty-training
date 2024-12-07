function bitwiseAND() {
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 & value2;
    display(result);
}

function bitwiseOR() {
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 | value2;
    display(result);
}


function bitwiseXOR() {
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 ^ value2;
    display(result);
}

function bitwiseNOT() {
    let value1 = Number(document.getElementById("value1").value);
    let result = ~value1;
    display(result);

function bitwiseLeftShift() {
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 << value2;
    display(result);
}

function bitwiseRightShift() {
    let value1 = Number(document.getElementById("value1").value);
    let value2 = Number(document.getElementById("value2").value);
    let result = value1 >> value2;
    display(result);
}
function display(result){
    let results=document.getElementById("result");
    let message = result ;
    results.innerHTML= `<h1>${message}</h1>` ;

}

