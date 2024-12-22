

function displayLocalStorage() {
    const table = document.getElementById('localStorageTable');
    table.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const row = table.insertRow();
        row.insertCell(0).innerText = key;
        row.insertCell(1).innerText = value;
    }
}


function displaySessionStorage() {
    const table = document.getElementById('sessionStorageTable');
    table.innerHTML = '<tr><th>Key</th><th>Value</th></tr>';

    for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        const value = sessionStorage.getItem(key);
        const row = table.insertRow();
        row.insertCell(0).innerText = key;
        row.insertCell(1).innerText = value;
    }
}


window.onload = () => {
    displayLocalStorage();
    displaySessionStorage();
};
