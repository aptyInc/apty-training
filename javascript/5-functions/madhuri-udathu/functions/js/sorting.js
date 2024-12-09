document.getElementById("sortForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Stop the form from reloading the page
  
    let input = document.getElementById("numbers").value;
  
    let numberArray = input.split(","); 
    for (let i = 0; i < numberArray.length; i++) {
      numberArray[i] = Number(numberArray[i].trim());
    }
  
    // Sort the numbers in ascending order
    numberArray.sort(function (a, b) {
      return a - b;
    });
  
    // Clear the table before adding new rows
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";
  
    // Add sorted numbers to the table
    for (let i = 0; i < numberArray.length; i++) {
      let row = document.createElement("tr"); 
      let indexCell = document.createElement("td"); 
      let numberCell = document.createElement("td"); 
  
      indexCell.textContent = i + 1; // Add the index (1-based)
      numberCell.textContent = numberArray[i]; 
  
      row.appendChild(indexCell); 
      row.appendChild(numberCell); 
      tableBody.appendChild(row); 
    }
  });
  