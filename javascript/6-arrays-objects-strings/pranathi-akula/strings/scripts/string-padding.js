function stringPadding() {
    const inputString = document.getElementById("inputString").value;
  
    if (!inputString) {
      alert("Please enter a string.");
      return;
    }
  
    const paddedString = inputString.padStart(10, '0');
    document.getElementById("output").textContent = paddedString;
  }
  