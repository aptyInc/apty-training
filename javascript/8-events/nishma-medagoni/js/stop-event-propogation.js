const parentDiv = document.getElementById("parent")
const childDiv = document.getElementById("child")

parentDiv.addEventListener("click", function () {
  alert("Parent Div clicked!")
})

childDiv.addEventListener("click", function (event) {
  alert("Child Div clicked!")
  event.stopPropagation()
})
