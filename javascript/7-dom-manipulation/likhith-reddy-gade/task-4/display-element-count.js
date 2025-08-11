document.getElementById("countButton").addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  const counts = {};
  elements.forEach((el) => {
    counts[el.tagName] = (counts[el.tagName] || 0) + 1;
  });

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = Object.entries(counts)
    .map(([tag, count]) => `<p>${tag}: ${count}</p>`)
    .join("");
});
