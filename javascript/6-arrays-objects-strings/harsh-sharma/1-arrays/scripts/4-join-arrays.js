function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    try{
        output_div.innerText = convertToSentence(JSON.parse(input_by_user));

    }catch(error){
        output_div.innerText = `Invalid JSON`;
        throw new Error('Invalid JSON ');
    }
}

function convertToSentence(input_array){
    return input_array.filter(item => item !== ' ' || '').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
}