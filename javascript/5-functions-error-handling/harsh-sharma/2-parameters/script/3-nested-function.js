function showFunction() {
  const display = document.querySelector(".show_result");
  const length =  Number(document.querySelector("#length").value);
  const width =   Number(document.querySelector("#width").value);
  function areaRectangle() {
    return length * width;
  }
  display.innerHTML =  2 * (length + width) + "<br>" + areaRectangle();
}
