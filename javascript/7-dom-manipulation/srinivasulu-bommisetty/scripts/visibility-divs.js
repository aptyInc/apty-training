function toggleDivs() {
  const divs = document.querySelectorAll('div[id^="div"]');
  let visibleIndex = -1;

  divs.forEach((div, index) => {
    if (div.classList.contains("visible")) {
      visibleIndex = index;
    }
  });

  if (visibleIndex === -1 || visibleIndex === divs.length - 1) {
    divs.forEach((div) => div.classList.remove("visible"));
    divs[0].classList.add("visible");
  } else {
    divs[visibleIndex].classList.remove("visible");
    divs[visibleIndex + 1].classList.add("visible");
  }
}
