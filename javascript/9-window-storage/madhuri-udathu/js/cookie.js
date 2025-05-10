function setCookie() {
    const name = document.getElementById('cookieName').value;
    const value = document.getElementById('cookieValue').value;
    if (name && value) {
        document.cookie = `${name}=${value}; path=/;`; // Cookie valid for the entire site
        document.getElementById('output').textContent = `Cookie "${name}" set!`;
    } else {
        document.getElementById('output').textContent = 'Please provide both name and value!';
    }
}

function readCookie() {
    const name = document.getElementById('cookieName').value;
    if (name) {
        const cookies = document.cookie.split('; '); 
        const cookie = cookies.find(c => c.startsWith(name + '=')); 
        if (cookie) {
            const value = cookie.split('=')[1]; // Get the value part
            document.getElementById('output').textContent = `Cookie Value: ${value}`;
        } else {
            document.getElementById('output').textContent = `Cookie "${name}" not found!`;
        }
    } else {
        document.getElementById('output').textContent = 'Please enter a cookie name to read!';
    }
}


function deleteCookie() {
    const name = document.getElementById('cookieName').value;
    if (name) {
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`; 
        document.getElementById('output').textContent = `Cookie "${name}" deleted!`;
    } else {
        document.getElementById('output').textContent = 'Please enter a cookie name to delete!';
    }
}
