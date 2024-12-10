 function parseJSON(jsonString) {
    try {
      const result = JSON.parse(jsonString);
      return result;
    } catch (error) {
      return `Invalid JSON: ${error.message}`;
    }
  }

  document
    .getElementById("parseButton")
    .addEventListener("click", function () {
      const jsonInput = document.getElementById("jsonInput").value;
      const result = parseJSON(jsonInput);
      document.getElementById(
        "output"
      ).textContent = `Result: ${JSON.stringify(result, null, 2)}`;
    });