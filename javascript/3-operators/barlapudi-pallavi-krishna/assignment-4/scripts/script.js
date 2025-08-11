
    function convert(value, type) {
      if (type === "number") return parseFloat(value);
      if (type === "boolean") return value.toLowerCase() === "true";
      return value;
    }

    function getInputs() {
      const val1 = document.getElementById("value1").value;
      const val2 = document.getElementById("value2").value;
      const type1 = document.getElementById("type1").value;
      const type2 = document.getElementById("type2").value;

      const v1 = convert(val1, type1);
      const v2 = convert(val2, type2);
      return { v1, v2 };
    }

    function logicalAnd() {
      const { v1, v2 } = getInputs();
      document.getElementById("result").innerText = `Result (v1 && v2): ${v1 && v2}`;
    }

    function logicalOr() {
      const { v1, v2 } = getInputs();
      document.getElementById("result").innerText = `Result (v1 || v2): ${v1 || v2}`;
    }

    function logicalNot() {
      const val1 = document.getElementById("value1").value;
      const type1 = document.getElementById("type1").value;
      const v1 = convert(val1, type1);
      document.getElementById("result").innerText = `Result (!v1): ${!v1}`;
    }
