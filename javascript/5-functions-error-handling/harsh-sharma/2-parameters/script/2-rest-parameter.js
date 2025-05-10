function showFunction(){
    const display = document.querySelector('.show_result');
    let array_of_elements = document.querySelector('#rest_parameter');
    array_of_elements = array_of_elements.value.split(',').filter((value) => value !== '').map((value) => Number(value));

    display.innerHTML = `Sum of elements: ${total_sum(...array_of_elements)}`;
}


function total_sum(...args) {
    let counter = 0;
    args.map((value) =>  counter = counter + value);
    return counter;
}