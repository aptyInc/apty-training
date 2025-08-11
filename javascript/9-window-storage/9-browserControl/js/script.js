let myWindow = null;

function openWindow() {
    if (myWindow === null || myWindow.closed) {
        myWindow = window.open("", "myWindow", "width=400,height=400");
        myWindow.document.write("<p>This is a new window!</p>");
    } else {
        myWindow.focus(); 
    }
}

function closeWindow() {
    if (myWindow !== null && !myWindow.closed) {
        myWindow.close(); 
    }
}

function resizeWindow() {
    if (myWindow !== null && !myWindow.closed) {
        myWindow.resizeTo(600, 600); 
    }
}

document.getElementById("openBtn").addEventListener("click", openWindow);
document.getElementById("closeBtn").addEventListener("click", closeWindow);
document.getElementById("resizeBtn").addEventListener("click", resizeWindow);
