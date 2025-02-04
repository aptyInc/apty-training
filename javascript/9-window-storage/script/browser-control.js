

let newWindow = null;

document.getElementById('openWindowBtn').addEventListener('click', () => {
    if (!newWindow || newWindow.closed) {
        newWindow = window.open('about:blank', 'newWindow', 'width=500,height=400');
        newWindow.document.write('<h1>New Window</h1><p>This is a new browser window.</p>');

        document.getElementById('closeWindowBtn').disabled = false;
        document.getElementById('resizeWindowBtn').disabled = false;
    } else {
        alert('Window is already open.');
    }
});

document.getElementById('closeWindowBtn').addEventListener('click', () => {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
        document.getElementById('closeWindowBtn').disabled = true;
        document.getElementById('resizeWindowBtn').disabled = true;
    } else {
        alert('No window is open.');
    }
});

document.getElementById('resizeWindowBtn').addEventListener('click', () => {
    if (newWindow && !newWindow.closed) {
        newWindow.resizeTo(800, 600);
    } else {
        alert('No window is open.');
    }
});
