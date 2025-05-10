const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "john": { "address": { "city": "New York" } },
    "emma": { "address": { "city": "London" } }
};


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
    }

    
    document.getElementById('result').innerHTML = result;
}