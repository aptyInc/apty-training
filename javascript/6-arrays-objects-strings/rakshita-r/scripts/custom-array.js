function customFlatten(arr) {
    return arr.reduce(
      (flat, item) =>
        Array.isArray(item)
          ? flat.concat(customFlatten(item))
          : flat.concat(item),
      []
    );
  }

  function flattenArray() {
    const input = document.getElementById("arrayInput").value;
    try {
      const nestedArray = JSON.parse(input);
      const flattenedArray = customFlatten(nestedArray);
      const uniqueArray = [...new Set(flattenedArray)]; 
      document.getElementById("result").innerText =
        JSON.stringify(uniqueArray);
    } catch (error) {
      document.getElementById("result").innerText = "Invalid input!";
    }
  }