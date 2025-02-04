// Update the display with stored data
function updateStorageDisplay() {
  document.getElementById(
    "local-data"
  ).textContent = `LocalStorage: ${JSON.stringify(localStorage)}`;
  document.getElementById(
    "session-data"
  ).textContent = `SessionStorage: ${JSON.stringify(sessionStorage)}`;
}

// Set LocalStorage
document.getElementById("set-local-btn").addEventListener("click", () => {
  const key = document.getElementById("storage-key").value;
  const value = document.getElementById("storage-value").value;
  if (key && value) {
    localStorage.setItem(key, value);
    updateStorageDisplay();
  } else {
    alert("Please provide both key and value.");
  }
});

// Set SessionStorage
document.getElementById("set-session-btn").addEventListener("click", () => {
  const key = document.getElementById("storage-key").value;
  const value = document.getElementById("storage-value").value;
  if (key && value) {
    sessionStorage.setItem(key, value);
    updateStorageDisplay();
  } else {
    alert("Please provide both key and value.");
  }
});

// Initial display update
updateStorageDisplay();
