function outerFunction(firstName) {
  return function middleFunction(lastName) {
    return function innerFunction(city) {
      return `Hello, ${firstName} ${lastName} from ${city}!`;
    };
  };
}

document
  .getElementById("nestedForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const city = document.getElementById("city").value;
    const result = outerFunction(first)(last)(city);

    document.getElementById("output").innerText = result;
  });
