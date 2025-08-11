document.getElementById('localStorageData').innerText = `Local Storage Data: ${localStorage.getItem('myKey')}`;
document.getElementById('sessionStorageData').innerText = `Session Storage Data: ${sessionStorage.getItem('myKey')}`;

localStorage.setItem('myKey', 'I am coming from the Local Storage 🚀🚀');
sessionStorage.setItem('myKey', 'I am coming form the session Storage🎉🎉');
