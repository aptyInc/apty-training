document.getElementById("toggleDivs").addEventListener("click", () => {
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.style.display = div.style.display === "none" ? "block" : "none";
  });
});
