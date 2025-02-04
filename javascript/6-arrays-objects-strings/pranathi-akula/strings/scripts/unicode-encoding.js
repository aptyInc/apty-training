function getUnicodeValues() {
    const inputString = document.getElementById("inputString").value;
  
    if (!inputString) {
      alert("Please enter a string.");
      return;
    }
  
    const unicodeValues = Array.from(inputString).map(char => char.charCodeAt(0));
    document.getElementById("output").textContent = JSON.stringify(unicodeValues);
  }
  