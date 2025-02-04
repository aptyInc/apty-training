document.getElementById('localDisplay').innerText = 'LocalStorage: ' + localStorage.getItem('localData');

document.getElementById('sessionDisplay').innerText = 'SessionStorage: ' + sessionStorage.getItem('sessionData');

        
function saveToLocal() {
    const localValue = document.getElementById('localInput').value;
    localStorage.setItem('localData', localValue);

    document.getElementById('localDisplay').innerText = 'LocalStorage: ' + localValue;

}

        
function saveToSession() {
    const sessionValue = document.getElementById('sessionInput').value;

    sessionStorage.setItem('sessionData', sessionValue);
    
    document.getElementById('sessionDisplay').innerText = 'SessionStorage: ' + sessionValue;

}