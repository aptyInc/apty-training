document.getElementById("countBtn").addEventListener("click", function () {
  const firstLevelParents = Array.from(document.body.children)
    .filter(el => el.id !== "countBtn" && el.id !== "output");

  const output = document.getElementById("output");
  output.innerHTML = "<h3>Nested Element Counts:</h3>";

  firstLevelParents.forEach((parent, index) => {
    const descendants = parent.querySelectorAll("*");
    const counts = {};

    descendants.forEach(el => {
      const tag = el.tagName.toLowerCase();
      counts[tag] = (counts[tag] || 0) + 1;
    });
    const parentInfo = document.createElement("div");
    parentInfo.innerHTML = `<strong>First Level Parent ${index + 1} &lt;${parent.tagName.toLowerCase()}&gt;:</strong>`;

    const list = document.createElement("ul");
    Object.keys(counts).sort().forEach(tag => {
      const li = document.createElement("li");
      li.textContent = `<${tag}>: ${counts[tag]}`;
      list.appendChild(li);
    });

    parentInfo.appendChild(list);
    output.appendChild(parentInfo);
  });
});
