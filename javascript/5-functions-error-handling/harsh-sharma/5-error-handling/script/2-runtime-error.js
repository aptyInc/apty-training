const users = {
    "harsh": { "address": { "city": "Mumbai" } },
    "bharat": { "address": { "city": "Delhi" } },
    "yash": { "address": { "city": "Bangalore" } },
    "prem": { "address": { "city": "Chennai" } },
    "sai": { "address": { "city": "Hyderabad" } },
    "tarun": { "address": { "city": "Pune" } },
    "shivam": { "address": { "city": "Lucknow" } },
    "rohitt": { "address": { "city": "Kolkata" } },
    "vinod": { "address": { "city": "Ahmedabad" } }
};

function getUserCity() {
    const nameInput = document.getElementById("userName").value.trim();
    const outputDiv = document.querySelector(".output");
    
    try {
        if (!nameInput) {
            throw new Error("Please enter a user name.");
        }

        if (!users[nameInput]) {
            throw new Error("User not found in database.");
        }

        const userCity = users[nameInput].address.city;
        outputDiv.innerText = `City: ${userCity}`;
    } catch (error) {
        outputDiv.innerText = `Error: ${error.message}`;
    }
}
