const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "john": { "address": { "city": "New York" } },
    "emma": { "address": { "city": "London" } }
};


const default_city = "Pune";


function findCity() {
    const username = document.getElementById('username').value.trim();
    let result;

    try {
        
        if (!users[username]) {
            throw new Error("User not found.");
        }


        result = users[username].address.city;

    } catch (error) {
       
        result = error.message; 
    } finally {
        
        if (result === "User not found.") {
            result = `User not found. Default city: ${default_city}`;
        }

        
        document.getElementById('result').innerHTML = result;
    }
}