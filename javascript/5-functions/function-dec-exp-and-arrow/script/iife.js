
const collectFormData = function() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const bio = document.getElementById('bio');

    username.value = 'vinodmudavath';
    email.value = 'vinodmudavath56@gmail.com';
    bio.value = 'Techincal consultant at Apty';
}

collectFormData()();
