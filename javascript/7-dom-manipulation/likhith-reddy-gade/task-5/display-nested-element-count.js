document.getElementById("countNested").addEventListener("click", () => {
  const parents = document.body.children;
  const result = Array.from(parents).map((parent) => {
    const nestedCount = parent.querySelectorAll("*").length;
    return `<p>${parent.tagName}: ${nestedCount} nested elements</p>`;
  });
  document.getElementById("nestedResult").innerHTML = result.join("");
});
