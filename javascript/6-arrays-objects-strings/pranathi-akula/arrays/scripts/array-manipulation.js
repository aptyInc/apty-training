function combineUniqueArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

function combineAndDisplay() {
  const input1 = document.getElementById("array1").value;
  const input2 = document.getElementById("array2").value;
  const array1 = input1.split(",").map(Number).filter(Boolean);
  const array2 = input2.split(",").map(Number).filter(Boolean);

  const result = combineUniqueArrays(array1, array2);
  document.getElementById("result").innerHTML = `[${result}]`;
}
