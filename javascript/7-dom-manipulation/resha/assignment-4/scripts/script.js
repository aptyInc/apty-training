const form = document.getElementById('myForm');

form.addEventListener('submit', function(e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name || !email) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});
