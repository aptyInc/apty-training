document.getElementById("result1").textContent = 5 + "10"; // String + Number → "510"
document.getElementById("result2").textContent = String(false) + 1; // "false" + 1 → "false1"
document.getElementById("result3").textContent = Number(undefined) + 10; // NaN + 10 → NaN
document.getElementById("result4").textContent = Boolean(null) + 10; // false + 10 → 10
document.getElementById("result5").textContent = {} + " is an object"; // Object coerces to "[object Object]" → "[object Object] is an object"
document.getElementById("result6").textContent =
  function () {} + " is a function"; // Function coerces to "function() {}" → "function() {} is a function"
document.getElementById("result7").textContent = [1, 2, 3] + 100; // Array coerces to "1,2,3" → "1,2,3100"
document.getElementById("result8").textContent = "123" - "23"; // String-to-Number coercion → 100
document.getElementById("result9").textContent = "5" == 5; // True because of type coercion
document.getElementById("result10").textContent = "10" === 10; // False
document.getElementById("result11").textContent = null == undefined; // True 
document.getElementById("result12").textContent = {} == {}; // False
