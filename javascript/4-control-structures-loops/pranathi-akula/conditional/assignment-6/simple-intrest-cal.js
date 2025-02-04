function findSimpleIntrest() {
  let amount = parseFloat(document.getElementById("amount").value);
  let roi = parseFloat(document.getElementById("roi").value);
  let time = parseFloat(document.getElementById("time").value);
  if (amount > 0 && roi > 0 && time > 0) {
    let result = (amount * roi * time) / 100;
    document.getElementById(
      "result"
    ).innerText = `Result:The Simple Interest is:${result}`;
  } else {
    document.getElementById("result").innerText =
      "Please enter positive values for all fields.";
  }
}
