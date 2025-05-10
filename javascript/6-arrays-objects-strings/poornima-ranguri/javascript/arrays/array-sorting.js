let studentsArray = [
  { name: "Bob", score: 80 },
  { name: "Alice", score: 90 },
  { name: "Poori", score: 100 },
  { name: "Gana", score: 100 },
];

function onSorting() {
  const userTextElement = document.getElementById("userText");
  const userObject = JSON.parse(userTextElement.value);
  studentsArray.push(userObject);

  function mySortingFunction(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j].score < arr[j + 1].score) {
          // Change to > for ascending order
          // Swap arr[j] and arr[j + 1]
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  const sortedArray = mySortingFunction(studentsArray);
  console.log(sortedArray);

  document.getElementById("result").textContent = JSON.stringify(sortedArray);
}

//{"name":"PG", "score":80}
