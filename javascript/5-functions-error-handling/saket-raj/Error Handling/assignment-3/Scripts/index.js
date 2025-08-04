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
  const default_city = "Pune";
  let city;

  try {
    city = users[nameInput].address.city;
    result.innerText = `City: ${city}`;
  } catch (error) {
    result.innerText = `Error: User not found or data missing. `;
  } finally {
    if (!city) {
      result.innerText += ` Default City: ${default_city}`;
    }
  }
}
