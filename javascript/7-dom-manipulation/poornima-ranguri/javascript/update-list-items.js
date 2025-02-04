const textElement = document.getElementById("updateText");
textElement.addEventListener("click", () => {
  document.getElementById("shadowRoot").innerHTML =
    "Shadow Root prevents fron fragile of web pages";

  document.getElementById("arrayText").innerText = "Arrays Container methods";
});
