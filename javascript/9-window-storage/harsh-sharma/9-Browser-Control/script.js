let newWindow;

function openWindow() {
    newWindow = window.open('', '_blank', 'width=500,height=500');
    newWindow.document.write('<h1>New Window</h1>');
}

function closeWindow() {
    if (newWindow) {
        newWindow.close();
    }
}

function resizeWindow() {
    if (newWindow) {
        newWindow.resizeTo(800, 600);
    }
}
