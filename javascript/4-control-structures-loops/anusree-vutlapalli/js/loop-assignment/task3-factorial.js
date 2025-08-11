function calculateFactorial() {
    const num = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (isNaN(num) || num < 0) {
        result.innerText = "Please enter a valid non-negative number.";
        return;
    }

    let factorial = 1;
    let i = 1;
    let steps=" ";
    do{
       factorial *= i;
       steps += i;
       if(i<num){
        steps += "*";
       }
       i++; 
    }
    while(i <= num);
    result.innerText = `calculated steps  ${steps} = ${factorial}`;
    
}
