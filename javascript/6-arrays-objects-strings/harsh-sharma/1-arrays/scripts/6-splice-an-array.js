function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    console.log(input_by_user);
    if(!input_by_user){
        output_div.innerText = spliceAnArray();
    }else{
        try{
            output_div.innerText = spliceAnArray(JSON.parse(input_by_user));
    
        }catch(error){
            output_div.innerText = `Invalid JSON`;
            throw new Error('Invalid JSON ');
        }
    }
}

function spliceAnArray(input_array=["Red", "Blue", "Green", "Yellow"]) {
    let final_arr = input_array.filter(item => item !== ' ' || '');
    const blue_index = final_arr.indexOf('Blue');
    const yellow_index = final_arr.indexOf('Yellow');
    

    if(blue_index){
        //Learnings: final_arr = final_arr.splice(blue_index,2,"Purple"); -> This will return us the values which we have removed from the array.
        final_arr.splice(blue_index,2,"Purple");

    }

    if(yellow_index){
        //In will return nothing if it is not deleting anything.
        final_arr.splice(yellow_index,0,"Orange");
    }
    

    return final_arr;
}
