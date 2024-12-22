const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInteger(0, 255)}, ${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )})`;

const tableElement = document.querySelectorAll("#tableElement");

tableElement.forEach(function (eachElement) {
  eachElement.addEventListener("mouseover", (event) => {
    event.preventDefault();

    if (event.target.tagName === "TD") {
      event.target.style.backgroundColor = randomColor();
    }
  });
});

tableElement.forEach(function (eachElement) {
  eachElement.addEventListener("mouseout", (event) => {
    console.log(event.target);
    event.preventDefault();
    console.log(event.target.tagName);
    if (event.target.tagName === "TD") {
      event.target.style.backgroundColor = "#ffffff";
    }
  });
});
