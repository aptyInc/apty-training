function calculateNumbers() {
    const number = parseInt(document.getElementById('number').value);
    const display_table = document.getElementById("result");

    if(!number || number < 0){
        display_table.innerHTML = `Value should not be negative for factorial numbers.`
        return;
    }
    
    display_table.innerHTML  = "";
    let iteration = number;
    let results = 1;   

    if(number <=1){
        display_table.innerHTML = `Value of factorial ${number} is: ${1}`
    }

    do{
        results *= iteration;
        iteration--;
    }
    while(iteration > 1 )

    display_table.innerHTML = `Value of factorial ${number} is: <strong>${results}</strong>`
}