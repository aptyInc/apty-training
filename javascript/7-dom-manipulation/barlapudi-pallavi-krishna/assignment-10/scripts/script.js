const htmlCSS = `
<style>
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 4px;
    }
</style>
<table id="myTable">
    <tbody>
        ${Array.from({ length: 10 }, (_, i) => `
            <tr>
                <td>Row ${i + 1}</td>
                <td>
                    <button class="up">Up</button>
                    <button class="down">Down</button>
                    <button class="top">Top</button>
                    <button class="bottom">Bottom</button>
                </td>
            </tr>
        `).join("")}
    </tbody>
</table>
`;

const host = document.getElementById("shadow-host");
const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = htmlCSS;

const tableBody = shadow.getElementById("myTable").querySelector("tbody");

shadow.querySelectorAll(".up").forEach(btn => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const prev = row.previousElementSibling;
        if (prev) tableBody.insertBefore(row, prev);
    });
});

shadow.querySelectorAll(".down").forEach(btn => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        const next = row.nextElementSibling;
        if (next) tableBody.insertBefore(next, row);
    });
});

shadow.querySelectorAll(".top").forEach(btn => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        tableBody.insertBefore(row, tableBody.firstElementChild);
    });
});

shadow.querySelectorAll(".bottom").forEach(btn => {
    btn.addEventListener("click", () => {
        const row = btn.closest("tr");
        tableBody.appendChild(row);
    });
});
