function chunkArray() {
  const arrayInput = document.getElementById("arrayInput").value
  const chunkSize = parseInt(document.getElementById("chunkSize").value, 10)

  let array

  try {
    array = JSON.parse(arrayInput)
  } catch (e) {
    document.getElementById("result").innerText = "Invalid JSON format. Please provide a valid array."
    return;
  }

  if (isNaN(chunkSize) || chunkSize <= 0) {
    document.getElementById("result").innerText = "Please enter a valid chunk size greater than 0."
    return
  }

  if (!Array.isArray(array)) {
    document.getElementById("result").innerText = "Please provide a valid array."
    return
  }

  const chunked = []
  for (let i = 0; i < array.length; i += chunkSize) {
    chunked.push(array.slice(i, i + chunkSize))
  }

  document.getElementById("result").innerHTML = JSON.stringify(chunked,null,2);
}
