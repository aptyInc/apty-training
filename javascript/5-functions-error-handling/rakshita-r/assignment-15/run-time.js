const users = {
  lucky: { address: { city: "Hyderabad" } },
  john: { address: { city: "New York" } },
  mary: { address: { city: "London" } },
};

function findCity() {
  const userName = document.getElementById("user-name").value.trim();
  const outputDiv = document.getElementById("output");

  try {
    const city = users[userName].address.city;
    outputDiv.textContent = `City: ${city}`;
    outputDiv.style.color = "green";
  } catch (error) {
    outputDiv.textContent = "Runtime Error: User not found!";
    outputDiv.style.color = "red";
  }
}
