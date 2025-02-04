const randomInterger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () => {
  const r = randomInterger(0, 255);
  const g = randomInterger(0, 255);
  const b = randomInterger(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
};

const parentDivElement = document.getElementById("parentDiv");
const childDivElement = document.getElementById("childDiv");

//event.stopPropagation

parentDivElement.addEventListener("click", () => {
  alert("Parent Clicked");
});

childDivElement.addEventListener("click", (event) => {
  alert("Child Clicked");
  event.stopPropagation();
});

childDivElement.addEventListener("click", () => {
  alert("Another Event Listener of  Child!");
});

//event.stopImmediatePropagtion

// parentDivElement.addEventListener("click", () => {
//   alert("Parent Clicked");
// });

// childDivElement.addEventListener("click", (event) => {
//   alert("Child Clicked");
//   event.stopImmediatePropagation();
// });

// childDivElement.addEventListener("click", () => {
//   alert("another Event Listener added to  Child!");
// });
