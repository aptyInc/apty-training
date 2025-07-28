// save data to localStorage
function saveToLocal() {
    const localData = document.getElementById('local-input').value;
    localStorage.setItem('localData', localData);
    displayStoredData();
}

//save data to sessionStorage
function saveToSession() {
    const sessionData = document.getElementById('session-input').value;
    sessionStorage.setItem('sessionData', sessionData);
    displayStoredData();
}

//  display stored data from localStorage and sessionStorage
function displayStoredData() {
    const localData = localStorage.getItem('localData') || 'No data in localStorage';
    const sessionData = sessionStorage.getItem('sessionData') || 'No data in sessionStorage';

    document.getElementById('local-output').textContent = `localStorage Data: ${localData}`
    document.getElementById('session-output').textContent = `sessionStorage Data: ${sessionData}`
}

// Display stored data on page load
window.onload = displayStoredData;