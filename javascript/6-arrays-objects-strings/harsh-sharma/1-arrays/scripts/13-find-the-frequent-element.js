function handleOnSubmit(event) {
  event.preventDefault();
  const output_div = document.querySelector(".output");
  const userArray = document.querySelector("#array_input").value;

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

    const result = mostFrequent(parsedArray);
    output_div.innerText = result;
  } catch (error) {
    output_div.innerText = `Invalid JSON array. Please check the input.`;
    throw new Error("Invalid JSON array");
  }
}

// Function to find the most frequently occurring element in an array
function mostFrequent(arr) {
    const frequency_map = arr.reduce((acc, curr) => {
      acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
      return acc;
    }, {});
  
    let maxKey = null;
    let maxFrequency = 0;
  
    for (let key in frequency_map) {
      if (frequency_map[key] > maxFrequency) {
        maxFrequency = frequency_map[key];
        maxKey = key;
      }
    }

    return `The most frequent element is ${maxKey} with frequency ${maxFrequency}`;
  }
  
