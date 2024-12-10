function filterArray(array, callback) {
    return array.filter(callback);
  }
  function handleFilterForm(event) {
    event.preventDefault();
  
    const numbersInput = document.getElementById("numbers").value;
    const limitInput = document.getElementById("limit").value;
  
    const numbers = numbersInput.split(",").map(Number);
    const limit = parseFloat(limitInput);
  
    if (numbers.some(isNaN) || isNaN(limit)) {
      alert("Please enter valid numbers in both fields!");
      return;
    }
  
    const filteredNumbers = filterArray(numbers, (num) => num <= limit);
  
    const resultContainer = document.getElementById("result");
    resultContainer.textContent = `Filtered Array: [${filteredNumbers.join(
      ", "
    )}]`;
  }
  
  document
    .getElementById("filterForm")
    .addEventListener("submit", handleFilterForm);