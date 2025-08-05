function handleOnSubmit(event) {
  event.preventDefault();
  const output_div = document.querySelector('.output');
  const userArray = document.querySelector('#array_input').value;
  const chunkSize = document.querySelector('#chunk_size').value;

  if (!userArray || !chunkSize) {
    output_div.innerText = `Please provide both an array and chunk size to perform the operation.`;
    return;
  }

  try {
    const parsedArray = JSON.parse(userArray);
    const parsedChunkSize = parseInt(chunkSize, 10);

    if (isNaN(parsedChunkSize) || parsedChunkSize <= 0) {
      output_div.innerText = `Invalid chunk size. Please enter a valid positive number.`;
      return;
    }

    const result = chunkArray(parsedArray, parsedChunkSize);
    output_div.innerText = JSON.stringify(result);
  } catch (error) {
    output_div.innerText = `Invalid JSON array. Please check the input.`;
    throw new Error('Invalid JSON array');
  }
}

// Function to chunk an array into smaller groups of specified size
function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
