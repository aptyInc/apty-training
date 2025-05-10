function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    try{
        output_div.innerText = sliceAnArray(JSON.parse(input_by_user));
    }catch(error){
        output_div.innerText = `Invalid JSON`;
        throw new Error('Invalid JSON ');
    }
}

function sliceAnArray(input_array){
    let final_arr = input_array.filter(item => item !== ' ' || '');
    return `First three elements: ${final_arr.slice(0, 3)} \n Last two numbers are: ${final_arr.slice(-3)}`; 
}
