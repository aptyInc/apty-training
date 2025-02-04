const users = {
    "madhuri": { "address": { "city": "Hyderabad" } },
    "anu": { "address": { "city": "New York" } },
    "nishma": { "address": { "city": "San Francisco" } },
    "poori": { "address": { "city": "london" } }
};

function findCity() {
    const userName = document.getElementById('userName').value.trim();
    const resultElement = document.getElementById('result');

    try {
        const city = users[userName].address.city;
        resultElement.textContent = `The city of ${userName} is: ${city}`;
    } catch (error) {
        resultElement.textContent = `Error: User "${userName}" not found.`;
    }
}