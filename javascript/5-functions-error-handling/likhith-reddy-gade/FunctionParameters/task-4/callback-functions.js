document
  .getElementById("callback-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("input-text").value;

    const processInput = (callback = (text) => text.toUpperCase()) =>
      callback(input);

    const result = processInput();
    document.getElementById(
      "processed-result"
    ).textContent = `Processed Text: ${result}`;
  });
