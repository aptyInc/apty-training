function removeDuplicates() {
  const arrInput = document.getElementById("array").value;
  const ans = document.getElementById("result");
  ans.innerHTML = "";

  const newArr = arrInput.split(",");
  const outputArr = [];

  for (let i = 0; i < newArr.length; i++) {
    let value = newArr[i];
    let found = false;

    for (let j = 0; j < outputArr.length; j++) {
      if (outputArr[j] === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      outputArr.push(value);
    }
  }

  ans.innerText = `After removing duplicates: [${outputArr.join(", ")}]`;
}
