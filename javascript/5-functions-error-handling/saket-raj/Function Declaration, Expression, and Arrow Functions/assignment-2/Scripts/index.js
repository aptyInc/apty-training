const sortNumbers = function (arr) {
  //coz func expression
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (Number(arr[j]) > Number(arr[j + 1])) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

function sortArray() {
  const arrInput = document.getElementById("array").value;
  const ans = document.getElementById("sorting");

  const a = arrInput.split(",");

  sortNumbers(a);

  let output = "Sorted Array: ";
  for (let i = 0; i < a.length; i++) {
    output += a[i];
    if (i < a.length - 1) output += ", ";
  }

  ans.innerText = output;
}
