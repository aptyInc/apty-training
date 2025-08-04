const users = {
  lucky: {
    address: {
      city: "Hyderabad",
    },
  },
  saket: {
    address: {
      city: "Delhi",
    },
  },
};

function getCity() {
  const nameInput = document.getElementById("username").value;
  const result = document.getElementById("result");

  try {
    const city = users[nameInput].address.city;
    result.innerText = `City: ${city}`;
  } catch (error) {
    result.innerText = `Error: User "${nameInput}" not found or address is missing.`;
  }
}
