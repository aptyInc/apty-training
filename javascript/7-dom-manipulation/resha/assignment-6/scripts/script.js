const output = document.getElementById("output");
const update = document.getElementById("update");

update.addEventListener("click", function () {
    let items = document.querySelectorAll("#list li");
        items[1].textContent = "Updated Item"; 
        items[3].textContent = "Updated Item";
});