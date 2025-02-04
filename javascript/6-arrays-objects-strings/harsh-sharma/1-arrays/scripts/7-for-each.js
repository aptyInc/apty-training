function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    if(!input_by_user){
        output_div.innerText = `Please enter something to perform the operation.`;
    }else{

        try{
            const parsed_input = JSON.parse(input_by_user);
            output_div.innerText = forEachOnArray(parsed_input);
        }catch(error){
            output_div.innerText = `Invalid JSON`;
            throw new Error('Invalid JSON ');
        }
    }
}

function forEachOnArray(input_array) {
    let result = '';
    input_array.forEach((item) => {
        console.log(item);
        result += `${item.name} is ${item.age} years old.\n`;
    })
    return result;
}
