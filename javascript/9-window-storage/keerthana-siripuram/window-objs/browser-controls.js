let myWindow;
function openWindow() {
    myWindow = window.open("https://www.w3schools.com")
}
function closeWindow() {
    if (myWindow && !myWindow.closed) {
        myWindow.close()
    }
    else {
        alert('Window already closed')
    }
}
function resizeWindow() {
    if (myWindow && !myWindow.closed) {
        myWindow.resize(300, 200)
    }
    else {
        alert('Window already closed')
    }
}