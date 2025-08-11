function changeColorById() {
  const ids = ["p1", "p2", "p3"];
  ids.forEach((id) => {
    let el = document.getElementById(id);
    el.style.color = getRandomColor();
  });
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleClassName() {
  let elements = document.getElementsByClassName("sameClass");
  for (let el of elements) {
    el.classList.toggle("bg-toggle");
  }
}

function changeSpans() {
  let spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = `Updated Span ${i + 1}`;
  }
}

function toggleDisabled() {
  let inputs = document
    .getElementsByName("input1")
    .concat(document.getElementsByName("input2"))
    .concat(document.getElementsByName("input3"));
}

function toggleDisabled() {
  let inputs = document.querySelectorAll("input[name]");
  inputs.forEach((input) => {
    input.disabled = !input.disabled;
    if (input.disabled) {
      input.classList.add("disabled");
    } else {
      input.classList.remove("disabled");
    }
  });
}

function addCustomAttribute() {
  let element = document.querySelector('[data-info="second"]');
  if (element) {
    element.setAttribute("data-new", "added");
  }
}
