function filterArray(numbers, callback) {
    return numbers.filter(callback);
  }
  
  document.getElementById("filterButton").addEventListener("click", () => {
    const numberInput = document.getElementById("numberInput").value;
    const limit = parseInt(document.getElementById("limitInput").value);
    const output = document.getElementById("output");
  
    const numbers = numberInput.split(",").map(Number);
  
    const filteredNumbers = filterArray(numbers, (num) => num <= limit);

    output.textContent = `Filtered Numbers: ${filteredNumbers.join(", ")}`;
  });
  