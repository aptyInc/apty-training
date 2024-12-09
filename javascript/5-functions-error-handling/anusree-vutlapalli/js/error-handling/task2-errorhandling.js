const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "anu": { "address": { "city": "bangalore" } }
};

function getUserCity() {
    const userName = document.getElementById('user_name').value;  
    let resultText = '';

    try {
        resultText = users[userName].address.city;
    } catch (error) {
        resultText = 'User not found or invalid name!';
    }
    document.getElementById('result').textContent = resultText;
}