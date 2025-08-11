document.getElementById("countBtn").addEventListener("click", () => {
  const firstLevelParents = Array.from(document.body.children).filter(
    (el) =>
      el.tagName.toLowerCase() !== "h1" &&
      el.tagName.toLowerCase() !== "button" &&
      el.id !== "results"
  );

  let output =
    "<strong>Nested element counts per first-level parent:</strong><ul>";

  firstLevelParents.forEach((parent, index) => {
    const nestedCount = parent.getElementsByTagName("*").length; // * means all ele inside
    output += `<li>Parent ${
      index + 1
    } (${parent.tagName.toLowerCase()}): ${nestedCount} nested elements</li>`;
  });

  output += "</ul>";

  document.getElementById("results").innerHTML = output;
});
