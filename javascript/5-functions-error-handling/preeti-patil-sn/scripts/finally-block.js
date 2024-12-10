const users = {
    preeti: {
      address: {
        city: "Hyderabad",
      },
    },
    shivani: {
      address: {
        city: "london",
      },
    },
  };

  const default_city = "Pune";

  function getCity(userName) {
    try {
      const city = users[userName].address.city;
      return city;
    } catch (error) {
      return "User not found!";
    } finally {
      return default_city;
    }
  }

  document
    .getElementById("getCityButton")
    .addEventListener("click", function () {
      const userName = document.getElementById("userNameInput").value;
      const city = getCity(userName); 
      document.getElementById("output").textContent = `City: ${city}`;
    });