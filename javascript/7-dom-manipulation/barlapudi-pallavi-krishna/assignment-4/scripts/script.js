document.getElementById("countBtn").addEventListener("click", function () {
  const all = document.getElementsByTagName("*");
  const counts = {};

  for (let i = 0; i < all.length; i++) {
    const tag = all[i].tagName.toLowerCase();
    counts[tag] = (counts[tag] || 0) + 1;
  }

  const output = document.getElementById("output");
  output.innerHTML = "<h3>Element Counts:</h3>";
  Object.keys(counts).sort().forEach(tag => {
    const line = document.createElement("div");
    line.textContent = `<${tag}>: ${counts[tag]}`;
    output.appendChild(line);
  });
});
