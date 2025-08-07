function combineArrays() {
  const input1 = document.getElementById("array1").value;
  const input2 = document.getElementById("array2").value;
  const result = document.getElementById("result");

  const arr1 = input1.split(",").map(Number);
  const arr2 = input2.split(",").map(Number);

  const combined = [...arr1, ...arr2];
  const unique = [];

  for (let i = 0; i < combined.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (combined[i] === unique[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      unique.push(combined[i]);
    }
  }

  result.innerText = `Combined array without duplicates: [${unique}]`;
}
