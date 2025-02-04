function changeTextColorById() {
  const ids = ["para1", "para2", "para3"];
  ids.forEach((id) => {
    const element = document.getElementById(id);
    element.style.color = `#${Math.floor(Math.random() * 16777215).toString(
      16
    )}`;
  });
}

function toggleClassName() {
  const elements = document.getElementsByClassName("class1");
  Array.from(elements).forEach((element) => {
    if (element.classList.contains("toggle-bg")) {
      element.classList.remove("toggle-bg");
    } else {
      element.classList.add("toggle-bg");
    }
  });
}

function changeInnerHTML() {
  const elements = document.getElementsByTagName("span");
  Array.from(elements).forEach((element, index) => {
    element.innerHTML = `Updated Span ${index + 1}`;
  });
}

function toggleDisabledByName() {
  const names = ["input1", "input2", "input3"];
  names.forEach((name) => {
    const inputs = document.getElementsByName(name);
    Array.from(inputs).forEach((input) => {
      input.disabled = !input.disabled;
    });
  });
}

function addCustomAttribute() {
  let customElements = document.querySelectorAll("[data-custom]");
  customElements.forEach((element, index) => {
    let newValue = "newValue" + (index + 1);
    element.setAttribute("data-new", newValue);
    element.innerHTML += ` (data-new: ${newValue})`;
  });
}
