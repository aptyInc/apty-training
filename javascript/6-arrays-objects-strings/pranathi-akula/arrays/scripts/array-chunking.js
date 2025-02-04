function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

function arrayChunking() {
  const input = document.getElementById("arrayInput").value;
  const array = input.split(",").map((num) => parseInt(num.trim()));
  const chunkSize = parseInt(document.getElementById("chunkSize").value);
  const result = chunkArray(array, chunkSize);
  document.getElementById("output").textContent = JSON.stringify(result);
}
