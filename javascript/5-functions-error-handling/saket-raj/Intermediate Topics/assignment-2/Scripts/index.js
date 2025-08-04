function processArray(arr, callback) {
  return callback(arr);
}

function filterNumbers() {
  const limit = Number(document.getElementById("limit").value);
  const output = document.getElementById("output");

  const numbers = [10, 25, 40, 60, 80, 5, 100];

  const filtered = processArray(numbers, (arr) =>
    arr.filter((num) => num <= limit)
  );

  output.innerText = `Filtered Numbers (<= ${limit}): ${filtered.join(", ")}`;
}
