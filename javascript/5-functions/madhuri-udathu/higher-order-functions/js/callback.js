function filterArray(array, callback) {
    return array.filter(callback); // Uses the callback to filter the array
  }

  function filterNumbers() {
    const numbersInput = document.getElementById('numbers').value;
    const limit = Number(document.getElementById('limit').value);

    if (!numbersInput || isNaN(limit)) {
      document.getElementById('result').textContent = "Please enter valid numbers and a limit.";
      return;
    }

    const numbersArray = numbersInput.split(',').map(num => Number(num.trim()));
    const filteredArray = filterArray(numbersArray, num => num <= limit);

    document.getElementById('result').textContent = `[${filteredArray.join(', ')}]`;
  }