function chunkArray() {
  const arrayInput = document.getElementById("chunk-array-input").value;
  const chunkSize = parseInt(document.getElementById("chunk-size").value, 10);

  if (!arrayInput || isNaN(chunkSize) || chunkSize <= 0) {
    document.getElementById("chunking-result").innerText = "Invalid input.";
    return;
  }

  const array = arrayInput.split(",").map((item) => item.trim());
  const chunks = [];

  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  document.getElementById(
    "chunking-result"
  ).innerText = `Chunks: ${JSON.stringify(chunks)}`;
}
