window.addEventListener("message", ({ data }) => {
    const result = document.getElementById("result");
    result.textContent = data;
  });

  function sendMessage() {
    const iframe1 = window.parent.document.getElementById("iframe1");
    const userInput = document.getElementById("input");
    


    iframe1.contentWindow.postMessage(userInput.value)


  }
