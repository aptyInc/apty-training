function showFunction(){
    const fibonacci_number = Number(document.querySelector('#fibonacci_number').value);
    const display = document.querySelector('.show_result');

    if(fibonacci_number < 0){
        display.innerText = "Please enter a positive number";
        return;
    }

    display.innerText = fibonacci_recuring(fibonacci_number);
}

function fibonacci_recuring(value){
    if(value < 2){
        return value;
    }
    return fibonacci_recuring(value-1) + fibonacci_recuring(value-2);
}