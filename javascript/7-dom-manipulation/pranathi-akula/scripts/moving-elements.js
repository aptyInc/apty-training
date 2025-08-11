document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("list");

  list.addEventListener("click", function (event) {
    const button = event.target;
    const item = button.closest("li");

    if (button.classList.contains("up")) {
      if (item.previousElementSibling) {
        list.insertBefore(item, item.previousElementSibling);
      }
    }

    if (button.classList.contains("down")) {
      if (item.nextElementSibling) {
        list.insertBefore(item.nextElementSibling, item);
      }
    }

    if (button.classList.contains("top")) {
      list.insertBefore(item, list.firstElementChild);
    }

    if (button.classList.contains("bottom")) {
      list.appendChild(item);
    }
  });
});
