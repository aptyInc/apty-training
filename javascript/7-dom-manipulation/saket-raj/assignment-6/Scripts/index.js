document.getElementById("updateBtn").addEventListener("click", () => {
  const items = document.querySelectorAll("#fruitList li");

  if (items[1]) items[1].textContent = "Papaya - Updated Item";
  if (items[3]) items[3].textContent = "Pineapple - Updated Item";
});
