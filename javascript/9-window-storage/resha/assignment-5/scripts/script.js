const output = document.getElementById("output");

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, val] = c.split("=");
        if (key === name) return val;
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

document.getElementById("set").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const value = document.getElementById("value").value;
    const days = parseInt(document.getElementById("expiry").value) || 1;

    setCookie(name, value, days);
    output.textContent = `Cookie "${name}" set successfully.`;
});

document.getElementById("get").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const cookie = getCookie(name);

    output.textContent = cookie ?
        `Value of "${name}" is: ${cookie}` :
        `Cookie "${name}" not found.`;
});

document.getElementById("delete").addEventListener("click", () => {
    const name = document.getElementById("name").value;
    deleteCookie(name);
    output.textContent = `Cookie "${name}" deleted.`;
});
