function evenOdd(){
    const num = document.getElementById("number").value;
    let output = document.getElementById("output");
    if (num % 2 === 0) {
        output.innerText = `${num}: Even number`;
    }
    else {
        output.innerText = `${num}: Odd number`;
    }
}