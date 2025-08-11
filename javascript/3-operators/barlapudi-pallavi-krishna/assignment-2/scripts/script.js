function getValues() {
  const val1 = parseFloat(document.getElementById("value1").value);
  const val2 = parseFloat(document.getElementById("value2").value);
  return { val1, val2 };
}

function add() {
  let { val1, val2 } = getValues();
  val1 += val2;
  document.getElementById("result").innerText = `Value1: ${val1}`;
}

function subtract() {
  let { val1, val2 } = getValues();
  val1 -= val2;
  document.getElementById("result").innerText = `Value1: ${val1}`;
}

function multiply() {
  let { val1, val2 } = getValues();
  val1 *= val2;
  document.getElementById("result").innerText = `Value1: ${val1}`;
}

function divide() {
  let { val1, val2 } = getValues();
  if(val2===0){
    document.getElementById("result").innerHTML=`Error: Division by zero!`;
  }else{
    val1 /= val2;
    document.getElementById("result").innerText = `Value1: ${val1}`;
  }
}

function modulus() {
  let { val1, val2 } = getValues();
  if(val2===0){
    document.getElementById("result").innerHTML=`Error: Division by zero!`;
  }else{
    val1 %= val2;
    document.getElementById("result").innerText = `Value1: ${val1}`;
  }
}

function increment() {
  let val1 = parseFloat(document.getElementById("value1").value);
  document.getElementById("result").innerText = `Incremented value1: ${++val1}`;
}

function decrement() {
  let val1 = parseFloat(document.getElementById("value1").value);
  document.getElementById("result").innerText = `Decremented value1: ${--val1}`;
}
