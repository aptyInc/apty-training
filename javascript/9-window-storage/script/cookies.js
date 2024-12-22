
document.getElementById('setcookie').addEventListener('click', () => {

    const name = document.getElementById("cookieName").value;
    const value = document.getElementById("cookieValue").value;
    const days = document.getElementById("cookieDays").value;

    if (!name || !value) {
        alert("Please provide both a cookie name and value!");
        return;
    }

    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }

    document.cookie = `${name}=${value}${expires}; path=/`;
    document.getElementById("result").textContent = `Cookie "${name}" set successfully!`;
})

document.getElementById('readcookie').addEventListener('click', () => {

    const name = document.getElementById("cookieName").value;
    if (!name) {
        alert("Please provide a cookie name to read!");
        return;
    }

    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
            document.getElementById("result").textContent = `Cookie "${name}" has value: ${cookieValue}`;
            return;
        }
    }

    document.getElementById("result").textContent = `Cookie "${name}" not found.`;
})

document.getElementById('deletecookie').addEventListener('click', () => {

    const name = document.getElementById("cookieName").value;

    if (!name) {
        alert("Please provide a cookie name to delete!");
        return;
    }

    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    document.getElementById("result").textContent = `Cookie "${name}" deleted successfully!`;
})