
document.getElementById("parent").addEventListener("click", function () {
  alert("Parent Div clicked!");
});


document.getElementById("child").addEventListener("click", function (event) {
  alert("Child Div clicked!");
  event.stopPropagation();
});
