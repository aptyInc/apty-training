function check() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  if (
    isNaN(num1) ||
    isNaN(num2) ||
    isNaN(num3)
  ) {
    document.getElementById("results").innerText =
      "Please enter all the numbers.";
      return;
  } else {
    if (num1 >= num2 && num1 >= num3) {
      document.getElementById(
        "results"
      ).innerText = `Value1=${num1} is larger number`;
    } else if (num2 >= num1 && num2 >= num3) {
      document.getElementById(
        "results"
      ).innerText = `Value2=${num2} is larger number`;
    } else if (num3 >= num1 && num3 >= num2) {
      document.getElementById(
        "results"
      ).innerText = `Value3=${num3} is larger number`;
    }
  }
}
