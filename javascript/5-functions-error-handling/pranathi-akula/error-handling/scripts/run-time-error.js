const users = {
  lucky: { address: { city: "Hyderabad" } },
  pranathi: { address: { city: "New Jersey" } },
  bonny: { address: { city: "Australia" } },
};

function findtheCity() {
  const username = document.getElementById("username").value;
  const resultElement = document.getElementById("result");
  try {
    if (
      users[username] &&
      users[username].address &&
      users[username].address.city
    ) {
      const city = users[username].address.city;
      resultElement.textContent = `The city of ${username} is ${city}.`;
    } else {
      throw new Error("User not found or address is missing.");
    }
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
}
