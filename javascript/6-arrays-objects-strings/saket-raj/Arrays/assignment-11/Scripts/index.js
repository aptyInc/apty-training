function chunkArray() {
  const inputArr = document.getElementById("array").value;
  const size = parseInt(document.getElementById("chunkSize").value);
  const result = document.getElementById("result");

  try {
    const arr = inputArr.split(",").map(Number);
    if (isNaN(size) || size <= 0) throw new Error();

    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }

    let output = "Chunked Array: ";
    for (let i = 0; i < chunks.length; i++) {
      output += `[${chunks[i].join(", ")}]`;
      if (i !== chunks.length - 1) output += ", ";
    }

    result.innerText = output;
  } catch {
    result.innerText =
      "Invalid input. Please enter valid numbers and chunk size.";
  }
}
