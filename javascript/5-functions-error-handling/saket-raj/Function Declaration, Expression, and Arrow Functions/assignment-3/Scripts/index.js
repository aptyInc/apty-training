let c = 0;
const counting = () => {
  c++;
  document.getElementById("output").innerText = "Count : " + c;
};

//only work when button is clicked and will trigger the counting fnc
function updateCount() {
  counting();
}
