const display = document.querySelector('.show_result');
const length = document.querySelector('#length');
const width = document.querySelector('#width');

function showFunction(){
    const length_value = Number(length.value);
    const width_value = Number(width.value);
    const area = length_value * width_value;

    display.innerHTML = `Area of rectangle is ${area}`;
}