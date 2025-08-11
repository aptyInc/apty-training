const users = {
    "lucky": { "address": { "city": "Hyderabad" } },
    "harsh": { "address": { "city": "New York" } },

    "prem": { "address": { "city": "London" } }

};


const default_city = "Pune";


function findCity() {

    const userName = document.getElementById("userName").value;

    let city;

    try {
        
        city = users[userName].address.city;

    } catch (error) {
        
        city = default_city;

    } finally {
        
        document.getElementById("result").innerText = `City: ${city}`;

    }
}