function saveLocal() {
  const key = document.getElementById("localKey").value;
  const value = document.getElementById("localValue").value;
  if (key && value) {
    localStorage.setItem(key, value);
    displayData();
  }
}

function saveSession() {
  const key = document.getElementById("sessionKey").value;
  const value = document.getElementById("sessionValue").value;
  if (key && value) {
    sessionStorage.setItem(key, value);
    displayData();
  }
}

function displayData() {
  const localList = document.getElementById("localData");
  const sessionList = document.getElementById("sessionData");

  localList.innerHTML = "";
  sessionList.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const li = document.createElement("li");
    li.textContent = key + " : " + value;
    localList.appendChild(li);
  }

  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    const value = sessionStorage.getItem(key);
    const li = document.createElement("li");
    li.textContent = key + " : " + value;
    sessionList.appendChild(li);
  }
}

window.onload = displayData;
