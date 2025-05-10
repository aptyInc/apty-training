function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const userArray = document.querySelector('#array_input').value;
  
    if (!userArray) {
      output_div.innerText = `Please provide an array to perform the operation.`;
      return;
    }
  
    try {
      const parsedArray = JSON.parse(userArray);
  
      if (!Array.isArray(parsedArray)) {
        output_div.innerText = `Invalid input. Please provide a valid array.`;
        return;
      }
      const result = removeDuplicates(parsedArray);
    output_div.innerText = JSON.stringify(result);
  } catch (error) {
    output_div.innerText = `Invalid JSON array. Please check the input.`;
    throw new Error('Invalid JSON array');
  }
}


function removeDuplicates(arr) {
    const mapping = {}
    let result = [];
    arr.forEach(event => {
        if(mapping[event]) {
            mapping[event] += 1;
        }else{
            result.push(event);
            mapping[event] = 1;
        }
    });


    return result;

}