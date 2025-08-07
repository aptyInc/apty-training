function UnicodeValues(str) {
    return Array.from(str).map(char => char.charCodeAt(0));
  }

  function showUnicodeValues() {
    const input = document.getElementById('input').value;
    const output = UnicodeValues(input);
    document.getElementById('result').textContent = output.join(', ');
  }