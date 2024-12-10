const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "prem": { "address": { "city": "New York" } },
    "harsh": { "address": { "city": "London" } }
};


function findCity() {
    const userName = document.getElementById("userName").value;

    try {
        
        const city = users[userName].address.city;
        document.getElementById("result").innerText = `City: ${city}`;
    } catch (error) {
        
        document.getElementById("result").innerText = 
            `Error: User not found or invalid data. Please try a different username.`;
    }
}