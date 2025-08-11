window.onload = function () {
  displayStorageData();
};

function saveToLocal() {
  const localInput = document.getElementById("localInput").value;
  if (localInput) {
    localStorage.setItem("localData", localInput);
    displayStorageData();
  }
}

function saveToSession() {
  const sessionInput = document.getElementById("sessionInput").value;
  if (sessionInput) {
    sessionStorage.setItem("sessionData", sessionInput);
    displayStorageData();
  }
}
function displayStorageData() {
  const localData = localStorage.getItem("localData") || "No data";
  const sessionData = sessionStorage.getItem("sessionData") || "No data";

  document.getElementById("localStorageData").textContent = localData;
  document.getElementById("sessionStorageData").textContent = sessionData;
}
