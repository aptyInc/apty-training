// Function to set a cookie
function setCookie() {
    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const days = document.getElementById("cookieExpiry").value;

    if (!name || !value || !days) {
        alert("Please fill in all fields to set a cookie.");
        return;
    }

    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;

    alert(`Cookie "${name}" set successfully!`);
}

// Function to read a cookie
function readCookie() {
    const name = document.getElementById("readCookieName").value;
    const cookies = document.cookie.split("; ");
    const cookie = cookies.find(cookie => cookie.startsWith(name + "="));

    const resultElement = document.getElementById("readCookieResult");
    if (cookie) {
        resultElement.textContent = `Cookie Value: ${cookie.split("=")[1]}`;
    } else {
        resultElement.textContent = `Cookie "${name}" not found.`;
    }
}

// Function to delete a cookie
function deleteCookie() {
    const name = document.getElementById("deleteCookieName").value;

    if (!name) {
        alert("Please enter the name of the cookie to delete.");
        return;
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

    const resultElement = document.getElementById("deleteCookieResult");
    resultElement.textContent = `Cookie "${name}" deleted successfully!`;
}
