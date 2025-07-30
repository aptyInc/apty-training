function calculateFreq() {
  const input = document.getElementById("string").value;
  let ans = document.getElementById("output");
  ans.innerHTML = "";

  const freq = {};

  for (let val in input) {
    let char = input[val];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  for (let char in freq) {
    ans.innerHTML += `${char} : ${freq[char]} <br>`;
  }
}
