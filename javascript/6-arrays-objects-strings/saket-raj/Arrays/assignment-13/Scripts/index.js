function mostFrequency() {
  const arrInput = document.getElementById("array").value;
  const ans = document.getElementById("result");
  ans.innerHTML = "";

  const newArr = arrInput.split(",");

  const freqMap = newArr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let mostFrequent = null;

  for (let key in freqMap) {
    if (freqMap[key] > maxCount) {
      maxCount = freqMap[key];
      mostFrequent = key;
    }
  }

  ans.innerText = `Most Frequent Element: ${mostFrequent}`;
}
