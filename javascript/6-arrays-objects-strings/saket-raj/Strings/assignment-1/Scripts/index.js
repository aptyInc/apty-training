function calculateLength() {
  const input = document.getElementById("sentence").value;
  const ans = document.getElementById("result");

  if (!input.trim()) {
    ans.innerText = "Please enter a valid sentence.";
    return;
  }

  const words = input
    .trim()
    .split(" ")
    .filter((word) => word !== "");
  //chain of ops
  const lengths = [];

  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }

  ans.innerText = lengths.join(" ");
}
