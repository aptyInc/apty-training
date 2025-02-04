const localInput = document.getElementById("localInput");
const sessionInput = document.getElementById("sessionInput");
const saveLocalButton = document.getElementById("saveLocal");
const saveSessionButton = document.getElementById("saveSession");
const localStorageData = document.getElementById("localStorageData");
const sessionStorageData = document.getElementById("sessionStorageData");

function updateStorageDisplay() {
  localStorageData.textContent =
    "LocalStorage Data: " + JSON.stringify(localStorage);
  sessionStorageData.textContent =
    "SessionStorage Data: " + JSON.stringify(sessionStorage);
}

saveLocalButton.addEventListener("click", () => {
  const key = "localkey";
  const value = localInput.value;
  if (value) {
    localStorage.setItem(key, value);
    updateStorageDisplay();
  } else {
    alert("please enter a value for session storage");
  }
});

saveSessionButton.addEventListener("click", () => {
  const key = "sessionkey";
  const value = sessionInput.value;
  if (value) {
    sessionStorage.setItem(key, value);
    updateStorageDisplay();
  } else {
    alert("please enter a value for session storage");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  updateStorageDisplay();
});
