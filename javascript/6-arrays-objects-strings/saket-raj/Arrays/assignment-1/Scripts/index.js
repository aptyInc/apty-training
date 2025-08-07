function customFlatten() {
  const input = document.getElementById("array").value;
  const ans = document.getElementById("result");

  let arr;

  //taking nested array or multi lvl arr as an input

  try {
    arr = JSON.parse(input);
    if (!Array.isArray(arr)) {
      throw new Error("Input is not an array");
    }
  } catch (err) {
    ans.innerText =
      "Invalid array format. Use proper syntax like [1, 2, [3, [4]]]";
    return;
  }

  function flattenArray(inputArr) {
    let res = [];
    for (let i = 0; i < inputArr.length; i++) {
      if (Array.isArray(inputArr[i])) {
        const flat = flattenArray(inputArr[i]); // recursively flatten
        for (let j = 0; j < flat.length; j++) {
          res.push(flat[j]); // push each flattened element
        }
      } else {
        res.push(inputArr[i]); // if not an arr push directly
      }
    }
    return res;
  }

  const flatArr = flattenArray(arr);
  ans.innerText = `Flattened Array: [${flatArr.join(", ")}]`;
}
