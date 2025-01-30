let result = document.getElementById("result");
function start() {
  let str = prompt("enter a string");
  let obj = {};
  if (str) {
    let h3 = document.createElement("h3");
    h3.innerText = `${str} : Char Count of this string`;
    result.appendChild(h3);
  }

  for (i in str) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (i in obj) {
    let p = document.createElement("p");
    p.innerText = `${i} : ${obj[i]}`;
    result.appendChild(p);
  }
}
