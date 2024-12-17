function spliceArray() {
  const items = prompt("Enter items separated by commas:").split(",");
  const index = parseInt(prompt("Enter the index to splice:"), 10);
  const deleteCount = parseInt(
    prompt("Enter the number of items to delete:"),
    10
  );
  const newItem = prompt("Enter the item to insert (leave blank if none):");
  if (newItem) {
    items.splice(index, deleteCount, newItem);
  } else {
    items.splice(index, deleteCount);
  }
  document.getElementById(
    "splice-result"
  ).innerText = `Updated Array: ${items.join(", ")}`;
}
