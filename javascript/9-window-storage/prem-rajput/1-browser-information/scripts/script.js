const urlInput = document.getElementById("urlInput");
const navigateBtn = document.getElementById("navigateBtn");
const backBtn = document.getElementById("backBtn");
const forwardBtn = document.getElementById("forwardBtn");
const reloadBtn = document.getElementById("reloadBtn");

navigateBtn.addEventListener("click", () => {
    const url = urlInput.value.trim();
    if (url) {
        const formattedUrl = url.startsWith("http") ? url : `https://${url}`;
        window.location.href = formattedUrl;
    }
});

backBtn.addEventListener("click", () => {
    window.history.back();
});

forwardBtn.addEventListener("click", () => {
    window.history.forward();
});

reloadBtn.addEventListener("click", () => {
    window.location.reload();
});
