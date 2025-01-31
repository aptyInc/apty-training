const users = {
    "lucky": {
        "address": {
            "city": "Hyderabad"
        }
    },
    "srinu": {
        "address": {
            "city": "nellore"
        }
    },            "lucky": {
        "sai": {
            "city": "ongole"
        }
    }
};

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    const userName = document.getElementById('userName').value.trim();

    try {
        if (!users[userName]) {
            throw new Error("User not found.");
        }

        const city = users[userName].address.city;

        document.getElementById('result').textContent = `City: ${city}`;
    } catch (error) {
        document.getElementById('result').textContent = `Error: ${error.message}`;
    }
});