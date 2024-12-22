
const form = document.getElementById('form');

form.addEventListener('submit', evt => {
    evt.preventDefault();

    const url = document.getElementById('url').value;
    if (url) {
        const fullUrl = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
        window.location.href = fullUrl;
    } else {
        alert("Please enter a valid URL!");
    }
})

document.getElementById('goback').addEventListener('click', () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        alert("No previous page in history!");
    }
})

document.getElementById('goforword').addEventListener('click', () => {
    window.history.forward();
})

document.getElementById('reload').addEventListener('click', () => {
    window.location.reload();
})
