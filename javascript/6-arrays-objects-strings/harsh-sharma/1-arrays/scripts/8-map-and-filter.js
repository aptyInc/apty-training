function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    if(!input_by_user){
        output_div.innerText = `Please enter something to perform the operation.`;
    }else{
        try{
            const parsed_input = JSON.parse(input_by_user);
            output_div.innerText = map_and_filter(parsed_input);
        }catch(error){
            output_div.innerText = `Invalid JSON`;
            throw new Error('Invalid JSON ');
        }
    }
}

function map_and_filter(input_array) {
    let result = [];
    console.log(input_array[0])
    input_array.filter(item => item.completed === true).map(item => result.push(item.task));
    return result;
}
