let newWindow = null;

document.getElementById("openBtn").addEventListener("click", function () {
    if (newWindow === null || newWindow.closed) {
        newWindow = window.open("", "newWindow", "width=500,height=400");
        newWindow.document.write("<h1>New Window</h1><p>This is a new window.</p>");
        document.getElementById("resizeBtn").disabled = false; 
        document.getElementById("closeBtn").disabled = false;  
        console.log("New window opened");
    } else {
        alert("Window is already open.");
    }
});


document.getElementById("resizeBtn").addEventListener("click", function () {
    if (newWindow && !newWindow.closed) {
        newWindow.resizeTo(800, 600); 
        console.log("Window resized");
    } else {
        alert("No window to resize.");
    }
});

document.getElementById("closeBtn").addEventListener("click", function () {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
        newWindow = null;
        document.getElementById("resizeBtn").disabled = true; 
        document.getElementById("closeBtn").disabled = true; 
        console.log("Window closed");
    } else {
        alert("No window to close.");
    }
});