document.getElementById("updateList").addEventListener("click", () => {
  const listItems = document.querySelectorAll("ul li");
  if (listItems[1]) listItems[1].textContent = "Updated Item";
  if (listItems[3]) listItems[3].textContent = "Updated Item";
});
