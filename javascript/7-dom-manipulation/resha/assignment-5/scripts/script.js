const output = document.getElementById("output");
const count = document.getElementById("count");

count.addEventListener("click", function () {
    let firstLevel = document.body.children;
    console.log(firstLevel);

    for (let parent of firstLevel) {        
        let counts = parent.querySelectorAll("*").length;        
        output.innerHTML += `<li>${parent.tagName.toLowerCase()} = ${counts} nested elements</li>`;
    }
});