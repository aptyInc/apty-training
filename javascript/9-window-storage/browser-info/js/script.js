function navigateToURL() {
    const url = document.getElementById('urlInput').value.trim();
    if (url) {
        const formattedUrl = url.startsWith('http') ? url : `https://${url}`;
        localStorage.setItem('previousPage', window.location.href);
        window.location.href = formattedUrl;
    } else {
        alert('Please enter a valid URL!');
    }
}
function goBack() {
    const previousPage = localStorage.getItem('previousPage'); // Retrieve the saved previous page URL
    if (previousPage) {
        window.location.href = previousPage;
    }
}

function goForward() {
    window.history.forward();
}

function reloadPage() {
    location.reload();
}