function padStringWithZeros(str) {
    return str.padStart(10, '0');
  }

  function showPaddedString() {
    const input = document.getElementById('inputText').value;
    const output = padStringWithZeros(input);
    document.getElementById('result').textContent = output;
  }