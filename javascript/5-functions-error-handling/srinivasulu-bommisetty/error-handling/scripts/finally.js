const users = {
  lucky: {
    address: {
      city: "Hyderabad",
    },
  },
  srinu: {
    address: {
      city: "Nellore",
    },
  },
  sai: {
    address: {
      city: "ongole",
    },
  },
};

const default_city = "Pune";

document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value.trim();

    let city;

    try {
      if (!users[userName]) {
        throw new Error("User not found.");
      }

      city = users[userName].address.city;

      document.getElementById("result").textContent = `City: ${city}`;
    } catch (error) {
      document.getElementById("result").textContent = ` ${error.message}`;
    } finally {
      document.getElementById(
        "result"
      ).textContent += ` (Default city: ${default_city})`;
    }
  });
