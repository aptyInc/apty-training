function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

function removeDuplicatesfromArray() {
  const input = document.getElementById("inputArray").value;
  const array = input.split(",").map((num) => parseInt(num.trim()));
  const result = removeDuplicates(array);
  document.getElementById(
    "result"
  ).textContent = `Unique Array: ${JSON.stringify(result)}`;
}
