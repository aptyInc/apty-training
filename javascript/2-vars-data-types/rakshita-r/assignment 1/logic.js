document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("results");
    const p = document.createElement("p");
    p.textContent = "External JavaScript executed";
    result.appendChild(p);
});
