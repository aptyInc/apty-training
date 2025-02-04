document.getElementById("countElements").addEventListener("click", () => {
  const elements = document.querySelectorAll("*");
  const counts = {};

  elements.forEach((el) => {
    const tagName = el.tagName.toLowerCase();
    counts[tagName] = (counts[tagName] || 0) + 1;
  });

  const resultList = document.getElementById("elementCounts");
  resultList.innerHTML = "";

  for (const [tag, count] of Object.entries(counts)) {
    const listItem = document.createElement("li");
    listItem.textContent = `${tag}: ${count}`;
    resultList.appendChild(listItem);
  }
});
