document
  .getElementById("json-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const jsonString = document.getElementById("json-input").value;
    const output = document.getElementById("json-output");

    try {
      const parsed = JSON.parse(jsonString);
      output.textContent = `Parsed JSON: ${JSON.stringify(parsed, null, 2)}`;
    } catch (error) {
      output.textContent = `Error parsing JSON: ${error.message}`;
    }
  });
