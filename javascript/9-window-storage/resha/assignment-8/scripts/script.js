const input = document.getElementById("dataInput");
const saveBtn = document.getElementById("saveBtn");
const localDataEl = document.getElementById("localData");
const sessionDataEl = document.getElementById("sessionData");

saveBtn.addEventListener("click", () => {
    const value = input.value;
    localStorage.setItem("localText", value);
    sessionStorage.setItem("sessionText", value);
    showData();
    input.value = "";
});

function showData() {
    localDataEl.textContent = localStorage.getItem("localText") || "No data yet";
    sessionDataEl.textContent = sessionStorage.getItem("sessionText") || "No data yet";
}

showData();
