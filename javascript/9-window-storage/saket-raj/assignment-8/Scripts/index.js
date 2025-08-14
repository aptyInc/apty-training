window.onload = function () {
  document.getElementById("localValue").textContent =
    localStorage.getItem("myLocal") || "No data";
  document.getElementById("sessionValue").textContent =
    sessionStorage.getItem("mySession") || "No data";
};

function saveLocal() {
  let value = document.getElementById("localInput").value;
  localStorage.setItem("myLocal", value);
  document.getElementById("localValue").textContent = value;
}

function saveSession() {
  let value = document.getElementById("sessionInput").value;
  sessionStorage.setItem("mySession", value);
  document.getElementById("sessionValue").textContent = value;
}
