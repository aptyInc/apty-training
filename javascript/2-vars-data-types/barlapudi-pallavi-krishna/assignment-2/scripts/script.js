const output = document.getElementById("output");

try {
  var x = 10;
  output.innerHTML += `var variable:<br>`;
  output.innerHTML += `var x = ${x}<br>`;

  var x = 20;
  output.innerHTML += `Re-declared var x = ${x}<br>`;

  x = 30;
  output.innerHTML += `Reassigned x = ${x}<br>`;
} catch (err) {
  output.innerHTML += `Error with var: ${err.message}<br>`;
}

try {
  let y = 100;
  output.innerHTML += `<br>let variable:<br>`;
  output.innerHTML += `let y = ${y}<br>`;

  try {
    let y = 200;
    output.innerHTML += `Re-declared let y = ${y}<br>`;
  } catch (err) {
    output.innerHTML += `Error on re-declaring let: ${err.message}<br>`;
  }

  y = 300;
  output.innerHTML += `Reassigned y = ${y}<br>`;
} catch (err) {
  output.innerHTML += `Error with let: ${err.message}<br>`;
}

try {
  const z = 1000;
  output.innerHTML += `<br>const variable:<br>`;
  output.innerHTML += `const z = ${z}<br>`;

  try {
    const z = 2000;
    output.innerHTML += `Re-declared const z = ${z}<br>`;
  } catch (err) {
    output.innerHTML += `Error on re-declaring const: ${err.message}<br>`;
  }

  try {
    z = 3000;
    output.innerHTML += `Reassigned z = ${z}<br>`;
  } catch (err) {
    output.innerHTML += `Error on reassigning const: ${err.message}<br>`;
  }
} catch (err) {
  output.innerHTML += `Error with const: ${err.message}<br>`;
}
