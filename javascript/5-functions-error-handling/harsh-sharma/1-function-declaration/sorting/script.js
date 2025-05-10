function showFunction(){
    let fibonacci_number = (document.querySelector('#fibonacci_number').value);
    const display = document.querySelector('.show_result');

    fibonacci_number = fibonacci_number.split(',').map((value) => value.trim()).map((value) => Number(value)).filter((value) => value !== '' || NaN || null);
   
    display.innerText = bubble_sorting(fibonacci_number);
}


function bubble_sorting(numbers){
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < numbers.length - i - 1; j++){
            if(numbers[j] > numbers[j + 1]){
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    return numbers;
}