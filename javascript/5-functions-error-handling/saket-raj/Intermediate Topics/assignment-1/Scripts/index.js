function repeatAction(action, n) {
  for (var i = 0; i < n; i++) {
    action(i);
  }
}

function generateList() {
  var item = document.getElementById("item").value;
  var count = Number(document.getElementById("count").value);
  var list = document.getElementById("list");

  list.innerHTML = "";

  repeatAction(function (i) {
    var li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }, count);
}
