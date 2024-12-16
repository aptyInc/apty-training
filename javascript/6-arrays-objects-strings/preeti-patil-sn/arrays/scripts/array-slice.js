function sliceArray() {
  const names = ["Alice", "Bob", "Charlie", "Daisy", "Eve"];

  // Extract the first three names
  const firstThree = names.slice(0, 3);

  // Extract the last two names using negative indices
  const lastTwo = names.slice(-2);

  document.getElementById("firstThree").textContent = firstThree.join(", ");
  document.getElementById("lastTwo").textContent = lastTwo.join(", ");
}
