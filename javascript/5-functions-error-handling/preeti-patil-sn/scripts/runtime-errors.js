const users = {
    preeti: {
      address: {
        city: "Hyderabad",
      },
    },
    rakshita: {
      address: {
        city: "hospet",
      },
    },
  };

  function getCity(userName) {
    try {
      const city = users[userName].address.city;
      return city;
    } catch (error) {
      return "User not found or invalid data!";
    }
  }

  document
    .getElementById("getCityButton")
    .addEventListener("click", function () {
      const userName = document.getElementById("userNameInput").value;
      const city = getCity(userName); 
      document.getElementById("output").textContent = city; 
    });