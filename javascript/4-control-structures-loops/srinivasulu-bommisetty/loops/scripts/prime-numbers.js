let result = document.getElementById("result");
function get_primes() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let str = "";

  if (Number(from) >= Number(to) || from <= 0) {
    result.innerText = `inputs are invalid`;
  } else {
    for (i = Number(from); i < Number(to); i++) {
      console.log("ih");
      count = 0;
      for (j = 2; j < i; j++) {
        if (i % j == 0) {
          count += 1;
          break;
        }
      }
      if (count == 0) {
        str = str + i + ", ";
      }
    }

    result.innerText = str;
  }
}
