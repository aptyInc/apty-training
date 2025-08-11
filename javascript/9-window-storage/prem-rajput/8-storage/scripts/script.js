document.getElementById("saveLocalStorage").addEventListener("click", () => {
    const localStorageValue =
        document.getElementById("localStorageInput").value;
    if (localStorageValue) {
        localStorage.setItem("localData", localStorageValue);
        document.getElementById("localStorageInput").value = "";
        displayLocalStorageData();
    }
});

function displayLocalStorageData() {
    const localData = localStorage.getItem("localData");
    document.getElementById("localStorageData").textContent =
        localData || "No data in LocalStorage";
}

document.getElementById("saveSessionStorage").addEventListener("click", () => {
    const sessionStorageValue = document.getElementById(
        "sessionStorageInput"
    ).value;
    if (sessionStorageValue) {
        sessionStorage.setItem("sessionData", sessionStorageValue);
        document.getElementById("sessionStorageInput").value = "";
        displaySessionStorageData();
    }
});

function displaySessionStorageData() {
    const sessionData = sessionStorage.getItem("sessionData");
    document.getElementById("sessionStorageData").textContent =
        sessionData || "No data in SessionStorage";
}

window.onload = () => {
    displayLocalStorageData();
    displaySessionStorageData();
};
