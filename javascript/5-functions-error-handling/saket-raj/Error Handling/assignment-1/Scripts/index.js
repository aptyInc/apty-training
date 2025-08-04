function parseJSON() {
  const input = document.getElementById("jsonInput").value;
  const output = document.getElementById("result");

  try {
    const parsed = JSON.parse(input);
    output.innerText = `Valid JSON:\n${JSON.stringify(parsed, null, 2)}`;
  } catch (error) {
    output.innerText = `Invalid JSON: ${error.message}`;
  }
}
