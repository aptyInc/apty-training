// Add event listener to parent div
document.getElementById("parentDiv").addEventListener("click", () => {
  alert("Parent Div clicked!");
});

// Add event listener to child div
document.getElementById("childDiv").addEventListener("click", (event) => {
  alert("Child Div clicked!");
  event.stopPropagation(); // Stop event from bubbling up to parent
});
