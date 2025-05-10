let flattened_array = [];

function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    flattened_array =[];
    try{
        output_div.innerText = flattenArray(JSON.parse(input_by_user));
    }catch(error){
        output_div.innerText = `Invalid JSON`;
        throw new Error('Invalid JSON ');
    }
    
}

function flattenArray(input_array){
    //Convert the input array into a Object that javascript can understand

    for(let key in input_array){
        if(Array.isArray(input_array[key])){
            flattenArray(input_array[key]);
        }else{
            flattened_array.push(input_array[key]);
        }
    }

    return flattened_array;
}