// Function to display storage data
function displayStorage() {
  const localData = Object.entries(localStorage)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  document.getElementById("localStorageDisplay").textContent =
    localData || "No data in LocalStorage";

  const sessionData = Object.entries(sessionStorage)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
  document.getElementById("sessionStorageDisplay").textContent =
    sessionData || "No data in SessionStorage";
}

// Save to LocalStorage
function saveToLocalStorage() {
  const key = document.getElementById("localKey").value;
  const value = document.getElementById("localValue").value;
  if (key && value) {
    localStorage.setItem(key, value);
    displayStorage();
  }
}

// Clear LocalStorage
function clearLocalStorage() {
  localStorage.clear();
  displayStorage();
}

// Save to SessionStorage
function saveToSessionStorage() {
  const key = document.getElementById("sessionKey").value;
  const value = document.getElementById("sessionValue").value;
  if (key && value) {
    sessionStorage.setItem(key, value);
    displayStorage();
  }
}

// Clear SessionStorage
function clearSessionStorage() {
  sessionStorage.clear();
  displayStorage();
}

// Display storage data on page reload
window.onload = displayStorage;
