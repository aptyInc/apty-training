const users = {
    prem: { address: { city: "Pune" } },
    sai: { address: { city: "Hyderabad" } },
    tarun: { address: { city: "Vizak" } },
};
const default_city = "Pune";

function findCity() {
    const userName = document.getElementById("userName").value.trim();
    const resultElement = document.getElementById("result");

    let userCity = default_city;

    try {
        if (!userName) {
            throw new Error("Name cannot be empty. Please enter a name.");
        }
        userCity = users[userName].address.city;
        resultElement.style.color = "green";
        resultElement.textContent = `${userName}'s city is ${userCity}.`;
    } catch (error) {
        resultElement.style.color = "red";
        resultElement.textContent = `Error: ${error.message || "User not found!"}`;
    } finally {
        if (resultElement.textContent.startsWith("Error")) {
            resultElement.textContent += ` Showing default city: ${default_city}.`;
        }
    }
}
