function getInputValues() {
    var value1 = document.getElementById("value1").value;
    var value2 = document.getElementById("value2").value;
    return { value1: parseInt(value1), value2: parseInt(value2) };
  }

  function bitwiseAnd() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ${
      inputs.value1
    } & ${inputs.value2} = ${inputs.value1 & inputs.value2}`;
  }

  function bitwiseOr() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ${
      inputs.value1
    } | ${inputs.value2} = ${inputs.value1 | inputs.value2}`;
  }

  function bitwiseXor() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ${
      inputs.value1
    } ^ ${inputs.value2} = ${inputs.value1 ^ inputs.value2}`;
  }

  function bitwiseNot() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ~${
      inputs.value1
    } = ${~inputs.value1}`;
  }

  function leftShift() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ${
      inputs.value1
    } << ${inputs.value2} = ${inputs.value1 << inputs.value2}`;
  }

  function rightShift() {
    var inputs = getInputValues();
    document.getElementById("result").textContent = `Result: ${
      inputs.value1
    } >> ${inputs.value2} = ${inputs.value1 >> inputs.value2}`;
  }