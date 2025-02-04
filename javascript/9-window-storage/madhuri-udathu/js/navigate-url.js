const frame = document.getElementById('webFrame');
function navigateToURL() {
    const urlInput = document.getElementById('urlInput').value;
    if (urlInput) {
        frame.src = urlInput;
    } else {
        alert('Please enter a valid URL');
    }
}

function goBack() {
    frame.contentWindow.history.back();
}

function goForward() {
    frame.contentWindow.history.forward();
}

function reloadPage() {
    frame.contentWindow.location.reload();
}