let btn = document.querySelector("#btn");
let dispaly = document.querySelector("#sorted_array");
btn.onclick = () => {
  let input = document.querySelector("#input").value;
  dispaly.innerHTML = input
    .split(" ")
    .sort((a, b) => a - b)
    .join(" ");
};
