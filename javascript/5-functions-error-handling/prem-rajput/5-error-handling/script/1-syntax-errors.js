function parseJSON() {
  const jsonInput = document.getElementById("jsonInput").value;
  const resultElement = document.getElementById("result");

  try {
    if (!jsonInput.trim()) {
      throw new Error(
        "Input cannot be empty. Please provide a valid JSON string."
      );
    }
    const parsedData = JSON.parse(jsonInput);
    resultElement.style.color = "green";
    resultElement.textContent =
      "Parsed successfully: " + JSON.stringify(parsedData, null, 2);
  } catch (error) {
    resultElement.style.color = "red";
    resultElement.textContent = `Error: ${error.message}`;
  }
}
