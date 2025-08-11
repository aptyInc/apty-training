function getValues() {
  const val1 = document.getElementById("value1").value;
  const val2 = document.getElementById("value2").value;
  return { val1, val2 };
}

function bitwiseAnd() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result (val1 & val2): ${
    val1 & val2
  }`;
}

function bitwiseOr() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result (val1 | val2): ${
    val1 | val2
  }`;
}

function bitwiseXor() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result (val1 ^ val2): ${
    val1 ^ val2
  }`;
}

function bitwiseNot() {
  const { val1 } = getValues();
  document.getElementById("result").innerText = `Result (~val1): ${~val1}`;
}

function leftShift() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result (val1 << val2): ${
    val1 << val2
  }`;
}

function rightShift() {
  const { val1, val2 } = getValues();
  document.getElementById("result").innerText = `Result (val1 >> val2): ${
    val1 >> val2
  }`;
}
