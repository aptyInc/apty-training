function stringPadding() {
  const input = document.getElementById("string").value;
  const ans = document.getElementById("result");

  if (input === "") {
    ans.innerText = "Enter a valid string";
    return;
  }

  ans.innerText = input.padStart(10, "0");
}
