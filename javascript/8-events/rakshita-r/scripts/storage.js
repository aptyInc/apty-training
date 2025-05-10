// Function to update the displayed data for LocalStorage and SessionStorage
function updateDisplay() {
    // Update LocalStorage Data
    const localStorageData = document.getElementById("localStorageData");
    localStorageData.innerHTML = ""; // Clear existing data
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        localStorageData.appendChild(listItem);
    }

    // Update SessionStorage Data
    const sessionStorageData = document.getElementById("sessionStorageData");
    sessionStorageData.innerHTML = ""; // Clear existing data
    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        const listItem = document.createElement("li");
        listItem.textContent = `${key}: ${value}`;
        sessionStorageData.appendChild(listItem);
    }
}

// Function to store data in LocalStorage
function storeLocal() {
    const key = document.getElementById("localStorageKey").value;
    const value = document.getElementById("localStorageValue").value;

    if (!key || !value) {
        alert("Please enter both key and value for LocalStorage.");
        return;
    }

    localStorage.setItem(key, value); // Store the data in LocalStorage
    updateDisplay(); // Update the displayed data
    alert(`Stored "${key}: ${value}" in LocalStorage.`);
}

// Function to store data in SessionStorage
function storeSession() {
    const key = document.getElementById("sessionStorageKey").value;
    const value = document.getElementById("sessionStorageValue").value;

    if (!key || !value) {
        alert("Please enter both key and value for SessionStorage.");
        return;
    }

    sessionStorage.setItem(key, value); // Store the data in SessionStorage
    updateDisplay(); // Update the displayed data
    alert(`Stored "${key}: ${value}" in SessionStorage.`);
}

// Automatically update the display when the page is reloaded
window.addEventListener("load", updateDisplay);
