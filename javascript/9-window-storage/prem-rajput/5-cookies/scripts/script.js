function setCookie(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
            return value || "Cookie is empty";
        }
    }
    return "Cookie not found";
}

function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
}

document.getElementById("setCookieBtn").addEventListener("click", () => {
    const name = document.getElementById("cookieName").value.trim();
    const value = document.getElementById("cookieValue").value.trim();
    if (name && value) {
        setCookie(name, value);
        alert(`Cookie "${name}" set successfully.`);
    } else {
        alert("Please provide a valid cookie name and value.");
    }
});

document.getElementById("readCookieBtn").addEventListener("click", () => {
    const name = document.getElementById("readCookieName").value.trim();
    if (name) {
        const result = getCookie(name);
        document.getElementById(
            "cookieResult"
        ).textContent = `Cookie Value: ${result}`;
    } else {
        alert("Please provide a valid cookie name.");
    }
});

document.getElementById("deleteCookieBtn").addEventListener("click", () => {
    const name = document.getElementById("deleteCookieName").value.trim();
    if (name) {
        deleteCookie(name);
        alert(`Cookie "${name}" deleted successfully.`);
    } else {
        alert("Please provide a valid cookie name.");
    }
});
