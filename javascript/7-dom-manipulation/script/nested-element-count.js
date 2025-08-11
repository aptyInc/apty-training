
document.getElementById("countButton").addEventListener("click", () => {
    const output = document.getElementById("output");
    output.innerHTML = "";

    const parents = document.querySelectorAll(".container");

    parents.forEach(parent => {
        const nestedElements = parent.querySelectorAll("*");
        const parentId = parent.id || "Unnamed Parent";

        const result = document.createElement("pre");
        result.textContent = `${parentId}: ${nestedElements.length} nested elements`;
        output.appendChild(result);
    });
});
