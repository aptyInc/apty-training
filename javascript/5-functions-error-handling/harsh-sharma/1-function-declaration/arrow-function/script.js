const display = document.querySelector('.show_result');
let counter = 0;
window.onload = () => {
    display.innerHTML = counter;
}

const update_the_counter = () => {
    display.innerHTML = counter;
}
const increaseTheValue = (event) => {
    counter++;
    update_the_counter();
}

const decreaseTheValue = (event) => {
    counter--;
    update_the_counter();
}