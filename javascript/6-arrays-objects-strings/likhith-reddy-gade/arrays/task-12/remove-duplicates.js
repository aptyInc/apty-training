function removeDuplicates() {
  const arrayInput = document.getElementById("duplicate-array-input").value;

  if (!arrayInput) {
    document.getElementById("remove-duplicates-result").innerText =
      "Please enter a valid array.";
    return;
  }

  const array = arrayInput.split(",").map((item) => item.trim());
  const uniqueArray = array.filter(
    (item, index) => array.indexOf(item) === index
  );

  document.getElementById(
    "remove-duplicates-result"
  ).innerText = `Unique Array: ${uniqueArray}`;
}
