function parseJSON(jsonString) {
  try {
    const parsedData = JSON.parse(jsonString);

    return { success: true, data: parsedData };
  } catch (error) {
    return { success: false, error: `Invalid JSON: ${error.message}` };
  }
}

document
  .getElementById("jsonForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const jsonString = document.getElementById("jsonInput").value;

    const result = parseJSON(jsonString);

    const resultElement = document.getElementById("result");
    if (result.success) {
      resultElement.textContent = `Parsed JSON: ${JSON.stringify(
        result.data,
        null,
        2
      )}`;
    } else {
      resultElement.textContent = result.error;
    }
  });
