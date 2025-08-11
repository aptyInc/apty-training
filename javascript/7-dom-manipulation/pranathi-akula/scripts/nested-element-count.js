document.getElementById("countButton").addEventListener("click", function () {
  const firstLevelParents = document.body.children;
  const elementCountList = document.getElementById("elementCountList");
  elementCountList.innerHTML = "";

  for (let parent of firstLevelParents) {
    const nestedElements = parent.querySelectorAll("*").length;
    const listItem = document.createElement("li");
    listItem.textContent = `${parent.tagName}: ${nestedElements} nested elements`;
    elementCountList.appendChild(listItem);
  }
});
