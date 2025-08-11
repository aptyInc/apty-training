function changeIdColor() {
  let ids = ["para1", "para2"];
  ids.forEach((id) => {
    let el = document.getElementById(id);
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    el.style.color = randomColor;
  });
}
function toggleClassBg() {
  let elements = document.getElementsByClassName("highlight   ");
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].style.backgroundColor === "lightblue") {
      elements[i].style.backgroundColor = "";
    } else {
      elements[i].style.backgroundColor = "lightblue";
    }
  }
}
function changeSpanText() {
  let spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = `Updated Span ${i + 1}<br>`;
  }
}
function toggleNameDisabled() {
  let inputs = document.querySelectorAll("input[name]");
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
  });
}
function addCustomAttribute() {
  let el = document.querySelector('[data-info="first"]');
  if (el) {
    el.setAttribute("data-added", "newValue");
    el.textContent += " (new attr added)";
  }
}
