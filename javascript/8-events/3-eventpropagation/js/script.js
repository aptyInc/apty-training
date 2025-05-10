document.getElementById("level1").addEventListener("click", function (event) {
    console.log("Capture phase at Level 1");
}, true);

// Bubble phase on level2
document.getElementById("level2").addEventListener("click", function (event) {
    console.log("Bubble phase at Level 2");
}, false);

// Target phase on level3
document.getElementById("level3").addEventListener("click", function (event) {
    console.log("Target phase at Level 3");
});

// Capture phase on child1 inside level1
document.getElementById("child1").addEventListener("click", function (event) {
    console.log("Capture phase at Child 1");
}, true);

// Bubble phase on child2 inside level2
document.getElementById("child2").addEventListener("click", function (event) {
    console.log("Bubble phase at Child 2");
}, false);

// Target phase on child3 inside level3
document.getElementById("child3").addEventListener("click", function (event) {
    console.log("Target phase at Child 3");
});