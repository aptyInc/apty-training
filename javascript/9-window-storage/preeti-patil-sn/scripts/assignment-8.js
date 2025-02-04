document.addEventListener("DOMContentLoaded", () => {
  const storageForm = document.getElementById("storageForm");
  const localInput = document.getElementById("localInput");
  const sessionInput = document.getElementById("sessionInput");
  const localData = document.getElementById("localData");
  const sessionData = document.getElementById("sessionData");

  // Display stored data on screen reload
  localData.textContent = localStorage.getItem("localData") || "None";
  sessionData.textContent = sessionStorage.getItem("sessionData") || "None";

  // Save data to localStorage and sessionStorage
  storageForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const localValue = localInput.value.trim();
    const sessionValue = sessionInput.value.trim();

    if (localValue) {
      localStorage.setItem("localData", localValue);
      localData.textContent = localValue;
    }

    if (sessionValue) {
      sessionStorage.setItem("sessionData", sessionValue);
      sessionData.textContent = sessionValue;
    }

    // Clear input fields after submission
    localInput.value = "";
    sessionInput.value = "";
  });
});
