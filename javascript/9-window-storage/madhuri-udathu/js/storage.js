function saveToLocalStorage() {
    const data = document.getElementById("localStorageInput").value;
    localStorage.setItem("localStorageData", data);
    displayStoredData();
}

function saveToSessionStorage() {
    const data = document.getElementById("sessionStorageInput").value;
    sessionStorage.setItem("sessionStorageData", data);
    displayStoredData();
}

function displayStoredData() {
    const localData = localStorage.getItem("localStorageData");
    const sessionData = sessionStorage.getItem("sessionStorageData");

    document.getElementById("localStorageData").textContent = localData ? localData : "No data";
    document.getElementById("sessionStorageData").textContent = sessionData ? sessionData : "No data";
}

window.onload = displayStoredData;