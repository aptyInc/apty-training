document
  .getElementById("user-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const users = {
      lucky: { address: { city: "Hyderabad" } },
    };

    const defaultCity = "Pune";
    const userName = document.getElementById("user-name").value;
    const output = document.getElementById("user-city");

    try {
      const city = users[userName].address.city;
      output.textContent = `City: ${city}`;
    } catch (error) {
      output.textContent = `Error: User not found.`;
    } finally {
      output.textContent += ` Default City: ${defaultCity}`;
    }
  });
