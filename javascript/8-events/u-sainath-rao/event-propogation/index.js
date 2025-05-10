const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");

level1.addEventListener(
	"click",
	function (event) {
		alert("Capture phase: Level 1");
	},
	true
);

level2.addEventListener(
	"click",
	function (event) {
		alert("Bubble phase: Level 2");
	},
	false
);

level3.addEventListener("click", function (event) {
	alert("Target phase: Level 3");
});
