const users = {
    "madhuri": { "address": { "city": "Hyderabad" } },
    "anu": { "address": { "city": "New York" } },
    "hanisha": { "address": { "city": "San Francisco" } }
};

// Default city
const default_city = "Pune";

function findCity() {
    const userName = document.getElementById('userName').value.trim();
    const resultElement = document.getElementById('result');
    let city;

    try {
        city = users[userName].address.city;
        resultElement.textContent = `The city of ${userName} is: ${city}`;
    } catch (error) {
        resultElement.textContent = `Error: User "${userName}" not found.`;
    } finally {
        // If city is undefined, use the default city
        if (!city) {
            resultElement.textContent += ` Using default city: ${default_city}.`;
        }
    }
}