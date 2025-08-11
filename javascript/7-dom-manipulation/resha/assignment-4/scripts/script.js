const output = document.getElementById("output");
const count = document.getElementById("countElements");

count.addEventListener("click", function () {
    let tags = ["div", "p", "a", "span", "br", "em"];

    tags.forEach(tag => {
        let count = document.getElementsByTagName(tag).length;
        output.innerHTML += `<li>${tag}: ${count}</li>`;
    });
});