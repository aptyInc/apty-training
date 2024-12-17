function onJoining() {
  const userTextElement = document.getElementById("userText");
  const userArray = JSON.parse(Array(userTextElement.value.trim()));
  const captilizedArray = userArray.map(
    (eachElement) => eachElement.charAt(0).toUpperCase() + eachElement.slice(1)
  );
  const joinedArray = captilizedArray.join(" ");
  console.log(joinedArray);

  document.getElementById("result").textContent = joinedArray;
}
