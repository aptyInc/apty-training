const parentDiv = document.getElementById("parent");
const childDiv = document.getElementById("child");

parentDiv.addEventListener("click", () => {
  alert("Parent div clicked");
});

childDiv.addEventListener("click", (event) => {
  alert("Child div clicked");
  event.stopPropagation(); //this will prevent bubbling
});
