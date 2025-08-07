function greeting() {
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;
  const ans = document.getElementById("result");

  if (nameInput === "" || ageInput === "") {
    ans.innerText = "Invalid input";
    return;
  }

  ans.innerText = `Hello, my name is ${nameInput} and I am ${ageInput} years old.`;
}
