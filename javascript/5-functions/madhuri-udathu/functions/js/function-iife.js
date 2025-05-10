(function () {

    const button = document.getElementById("clickButton"); 
    const messageParagraph = document.getElementById("message"); 
  
    function updateMessage() {
      messageParagraph.textContent = "You clicked the button!";
      console.log("Button was clicked, and the message was updated.");
    }
  
    button.addEventListener("click", updateMessage);
    console.log("IIFE executed: Button setup is complete.");
  })();
  