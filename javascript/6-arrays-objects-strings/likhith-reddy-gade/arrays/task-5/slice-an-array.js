function sliceArray() {
  const names = prompt("Enter names separated by commas:").split(",");
  const start = parseInt(prompt("Enter the starting index for slicing:"), 10);
  const end = parseInt(prompt("Enter the ending index for slicing:"), 10);
  const sliced = names.slice(start, end);
  document.getElementById(
    "slice-result"
  ).innerText = `Sliced Array: ${sliced.join(", ")}`;
}
