function sortString() {
  const inputString = document.getElementById("input").value.trim();

  if (!inputString) {
    alert("Please enter a string.");
    return;
  }

  const sortedString = inputString.split("").sort().join("");
  document.getElementById("output").textContent = sortedString;
}
