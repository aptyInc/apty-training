function handleOnSubmit(event){
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
    if(!input_by_user){
        output_div.innerText = `Please enter something to perform the operation.`;
    }else{

        try{
            const parsed_input = JSON.parse(input_by_user);
            output_div.innerText = everyAnsSome(parsed_input);
        }catch(error){
            output_div.innerText = `Invalid JSON`;
            throw new Error('Invalid JSON ');
        }
    }
}

function everyAnsSome(input_array) {
    let result = '';
    
    const all_student_passed = input_array.every((item) => item.score > 35);
    const some_student_passed = input_array.some((item) => item.score > 35);

    if(all_student_passed){
        result += 'All students have passed the exam.\n';
    }else if(!all_student_passed){
        result += 'Some students Failed.\n';
    }

    return result;
}
