const users = {
    "Trisha": { "address": { "city": "Hyderabad"}},
    "Rahul": { "address": { "city": "Bangalore"}},
    "Sriya": { "address": { "city": "Hyderabad"}}
};

function getValues() {
    const output = document.getElementById("output");
    const name = document.getElementById("name").value;

    try {
        const city = users[name].address.city;
        output.innerText = `City: ${city}`;
    } catch (error) {
        output.innerText = `Error: ${error.message}`;
    }
}


