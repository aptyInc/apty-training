function check_odd_even(value){
    if(value%2 === 0){
        return true;
    }else{
        false;
    }
}
document.getElementById("odd-form").addEventListener("submit", (event)=>{
    event.preventDefault();

    const input_value = document.getElementById("odd-even-input").value;
    const result_div = document.getElementById("odd-even-result");

    result_div.innerHTML = check_odd_even(input_value) ? `Even Value: ${input_value}` : `Odd Value: ${input_value}`
})