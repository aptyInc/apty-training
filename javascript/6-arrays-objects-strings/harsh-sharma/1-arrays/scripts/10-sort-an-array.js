function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const input_by_user = document.querySelector('#array_element').value;
  
    if (!input_by_user) {
      output_div.innerText = `Please enter an array to perform the operation.`;
    } else {
      try {
        const parsed_input = JSON.parse(input_by_user);
        output_div.innerText = sortArrayByScore(parsed_input);
      } catch (error) {
        output_div.innerText = `Invalid JSON`;
        throw new Error('Invalid JSON');
      }
    }
  }
  
  function sortArrayByScore(input_array) {
    if (!Array.isArray(input_array)) {
      return 'Invalid input. Please enter a valid array.';
    }
  
    const sortedArray = input_array.sort((a, b) => b.score - a.score);
    return JSON.stringify(sortedArray);
  }
  