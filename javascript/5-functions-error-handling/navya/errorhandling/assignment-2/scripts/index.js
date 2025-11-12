const result = document.getElementById("result");

const users = {
    "lucky": { address: { city: "Hyderabad" } },
    "navya": { address: { city: "Hyderabad" } },
    "sam": { address: { city: "Chennai" } }
};

function findCity() {
    const name = document.getElementById("userInput").value.trim().toLowerCase();

    try {
        const cityName = users[name].address.city;
        result.textContent = `City: ${cityName}`;
    } catch (err) {
        result.textContent = "User not found! Please enter a valid username.";
    }
}
