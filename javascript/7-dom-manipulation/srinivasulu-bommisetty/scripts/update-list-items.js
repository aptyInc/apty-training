function updateList() {
  const listItems = document.querySelectorAll("#itemList li");

  if (listItems.length >= 2) listItems[1].textContent = "Updated Item"; // Second item
  if (listItems.length >= 4) listItems[3].textContent = "Updated Item"; // Fourth item
}
