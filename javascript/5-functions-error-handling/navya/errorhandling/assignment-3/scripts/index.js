const result = document.getElementById("result");

const users = {
    lucky: { address: { city: "Hyderabad" } },
    navya: { address: { city: "Bangalore" } },
    sam: { address: { city: "Chennai" } }
};

const default_city = "Pune";

function showUserCity() {
    const nameInput = document.getElementById("userInput").value.trim().toLowerCase();
    let cityFound = "";

    try {
        cityFound = users[nameInput].address.city;
        result.textContent = `City: ${cityFound}`;
    } catch (error) {
        result.textContent = "User not found!";
    } finally {
        
        result.textContent += ` (Default City: ${default_city})`;
    }
}
