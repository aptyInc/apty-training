let newWindow = null; // Variable to store the reference to the new window

// Function to open a new browser window
function openWindow() {
    const url = document.getElementById("windowURL").value || "https://example.com";
    const name = document.getElementById("windowName").value || "newWindow";
    const features = "width=800,height=600"; // Default size for the new window

    // Open a new window
    newWindow = window.open(url, name, features);

    // Update the window status
    const status = document.getElementById("windowStatus");
    if (newWindow) {
        status.textContent = `Opened a new window: ${name}`;
    } else {
        status.textContent = "Failed to open the window. It may be blocked by the browser.";
    }
}

// Function to resize the new browser window
function resizeWindow() {
    if (newWindow && !newWindow.closed) {
        const width = parseInt(document.getElementById("windowWidth").value) || 800;
        const height = parseInt(document.getElementById("windowHeight").value) || 600;

        // Resize the window
        newWindow.resizeTo(width, height);

        // Update the window status
        const status = document.getElementById("windowStatus");
        status.textContent = `Resized the window to ${width}x${height}.`;
    } else {
        alert("The window is not open or has been closed.");
        document.getElementById("windowStatus").textContent = "No active window to resize.";
    }
}

// Function to close the new browser window
function closeWindow() {
    if (newWindow && !newWindow.closed) {
        newWindow.close(); // Close the window

        // Update the window status
        const status = document.getElementById("windowStatus");
        status.textContent = "The window has been closed.";
    } else {
        alert("The window is not open or has already been closed.");
        document.getElementById("windowStatus").textContent = "No active window to close.";
    }
}
