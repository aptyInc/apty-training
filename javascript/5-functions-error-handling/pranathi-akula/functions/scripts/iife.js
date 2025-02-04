(function () {
  const defaultText = "Enter your text here...";

  const input = document.getElementById("defaultInput");
  if (input) {
    input.value = defaultText;
  } else {
    console.warn('Input box with ID "defaultInput" not found.');
  }

  console.log("Default values have been initialized.");
})();
