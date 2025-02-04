function changeTextColor() {
    const paragraphs = document.querySelectorAll('[id^="para"]');
    paragraphs.forEach(p => {
      const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      p.style.color = randomColor;
    });
  }

  function toggleClassName() {
    const elements = document.getElementsByClassName('class1');
    Array.from(elements).forEach(el => {
      el.classList.toggle('toggle-background');
    });
  }

  function changeInnerHTML() {
    const spans = document.getElementsByTagName('span');
    Array.from(spans).forEach(span => {
      span.innerHTML = "New text added <br>";
    });
  }

  function toggleDisabled() {
    const inputs = document.getElementsByName('input1');
    inputs.forEach(input => {
      input.disabled = !input.disabled;
    });
  }

  function addCustomAttribute() {
    const elements = document.querySelectorAll('[custom-attr]');
    elements.forEach(el => {
      el.setAttribute('new-attr', 'newValue');
    });
  }