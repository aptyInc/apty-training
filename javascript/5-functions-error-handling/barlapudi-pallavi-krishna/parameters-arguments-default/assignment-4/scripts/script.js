function processText(
  text,
  callback = function (str) {
    return str.toUpperCase();
  }
) {
  return callback(text);
}

function convert() {
  const userText = document.getElementById("inputText").value;
  if(userText===""){
    document.getElementById("results").innerText ="Enter a proper string";
    return;
  }else{
  const result = processText(userText);
  document.getElementById("results").innerText = "Result: " + result;
  }
}
