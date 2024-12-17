function changeColorById() {
    const element = document.getElementById("p1"); 
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random color.
  }

  function toggleClassByClassName() {
    const elements = document.getElementsByClassName("group");
    for (let element of elements) {
      element.classList.toggle("highlight");
    }
  }

  function changeInnerHTMLByTag() {
    const elements = document.getElementsByTagName("span");
    for (let element of elements) {
      element.innerHTML = "Updated " + element.innerHTML;
    }
  }

  function toggleDisabledByName() {
    const elements = document.getElementsByName("input1"); 
    for (let element of elements) {
      element.disabled = !element.disabled;
    }
  }

  function addCustomAttribute() {
    const element = document.querySelector('[data-custom="val1"]'); 
    element.setAttribute("data-new", "newValue");
    element.textContent = " (New Attribute Added)";
  }