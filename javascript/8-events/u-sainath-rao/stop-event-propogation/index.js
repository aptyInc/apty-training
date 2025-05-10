const parentDiv = document.getElementById("parent");
const childDiv = document.getElementById("child");

parentDiv.addEventListener("click", function () {
	alert("Parent Div Clicked");
});

childDiv.addEventListener("click", function (event) {
	alert("Child Div Clicked");
	event.stopPropagation();
});
