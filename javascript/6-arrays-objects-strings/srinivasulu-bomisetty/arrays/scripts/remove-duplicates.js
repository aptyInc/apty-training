function removeDuplicates(arr) {
  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

const inputArray = [1, 3, 2, 2, 3, 4, 4, 3];

const result = removeDuplicates(inputArray);

document.getElementById(
  "inputArray"
).innerText = `Input Array: [${inputArray.join(", ")}]`;
document.getElementById(
  "outputArray"
).innerText = `Output Array: [${result.join(", ")}]`;
