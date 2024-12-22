const userUrl = document.getElementById("userUrl");

const buttonElement = document.querySelectorAll("button");

buttonElement.forEach((eachElement) => {
  if (eachElement.textContent === "Navigate") {
    eachElement.addEventListener("click", () => {
      console.log("navigate");
      location = userUrl.value;
    });
  } else if (eachElement.textContent === "Goback") {
    eachElement.addEventListener("click", () => {
      console.log("Goback");
      history.back();
    });
  } else if (eachElement.textContent === "Go Forward") {
    eachElement.addEventListener("click", () => {
      console.log("Go Forward");
      history.forward();
    });
  } else if (eachElement.textContent === "Reload") {
    eachElement.addEventListener("click", () => {
      location.reload();
    });
  }
});
