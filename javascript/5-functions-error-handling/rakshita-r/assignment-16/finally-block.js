
const users = {
  "lucky": { "address": { "city": "Hyderabad" } },
  "john": { "address": { "city": "New York" } },
  "mary": { "address": { "city": "London" } },
};

const default_city = "Bengalur"; // Default city when user is not found

function findCity() {
  // Get user input from the text box
  const userName = document.getElementById('user-name').value.trim();
  const outputDiv = document.getElementById('output');
  let city;

  try {
    // Try to get the city for the entered username
    city = users[userName].address.city;
    outputDiv.textContent = `City: ${city}`;
    outputDiv.style.color = "green";
  } catch (error) {
    // Handle the error
    city = null; // Clear city in case of error
  } finally {
    // Use the default city if the city is not found
    if (!city) {
      outputDiv.textContent = `City: ${default_city} (Default City)`;
      outputDiv.style.color = "orange";
    }
  }
}
