function updateScreenProperties() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const additionalProperty = document.getElementById("extraProperty").value;

  document.getElementById("screenWidth").textContent = `${width}px`;
  document.getElementById("screenHeight").textContent = `${height}px`;

  if (additionalProperty && additionalProperty in window) {
    document.getElementById("additionalPropertyValue").textContent =
      window[additionalProperty];
  } else if (additionalProperty) {
    document.getElementById(
      "additionalPropertyValue"
    ).textContent = `Property not found`;
  }
}

window.addEventListener("resize", updateScreenProperties);

function addProperty() {
  updateScreenProperties();
}

updateScreenProperties();
