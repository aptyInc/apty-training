function multiplicationtable() {
    const number = document.getElementById("number").value;
    const resultDiv = document.getElementById("result");
  
    resultDiv.innerHTML = "";
    if (number === "" || isNaN(number)) {
      resultDiv.innerHTML = "Please enter a valid number.";
      return;
    }
    let table = `<h2>Multiplication Table of ${number}</h2>`;
    for (let i = 1; i <= 10; i++) {
      table += `${number} x ${i} = ${number * i}<br>`;
    }
    document.getElementById("result").innerHTML = table;
  }