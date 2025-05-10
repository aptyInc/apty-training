document.addEventListener("DOMContentLoaded", () => {
  const parentDiv = document.querySelector(".parent");
  const childDiv = document.querySelector(".child");

  // Listener on Parent Div
  parentDiv.addEventListener("click", () => {
    alert("Parent Div Clicked");
  });

  // Listener on Child Div with stopPropagation
  childDiv.addEventListener("click", (event) => {
    alert("Child Div Clicked");
    event.stopPropagation(); // Stops the event from propagating to the parent
  });
});
