document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("task1Frame");

  // Define the Task 1 JS content
  const task1JsContent = `
        document.addEventListener("DOMContentLoaded", () => {
            // Change text color randomly for ID elements
            document.getElementById("changeColor").addEventListener("click", () => {
                const colors = ["red", "blue", "green", "purple", "orange"];
                const id1 = document.getElementById("id1");
                const id2 = document.getElementById("id2");
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                id1.style.color = randomColor;
                id2.style.color = randomColor;
            });

            // Toggle background color for class elements
            document.getElementById("toggleClass").addEventListener("click", () => {
                const elements = document.getElementsByClassName("class1");
                for (const element of elements) {
                    element.classList.toggle("highlight");
                }
            });

            // Change innerHTML for tag elements
            document.getElementById("changeText").addEventListener("click", () => {
                const spans = document.getElementsByTagName("span");
                for (let i = 0; i < spans.length; i++) {
                    spans[i].innerHTML = \`Updated Tag Element \${i + 1}\`;
                }
            });

            // Toggle disabled attribute for name elements
            document.getElementById("toggleDisabled").addEventListener("click", () => {
                const inputs = document.getElementsByName("name1");
                inputs.forEach((input) => {
                    input.disabled = !input.disabled;
                });
            });

            // Add a new custom attribute for querySelector elements
            document.getElementById("addAttribute").addEventListener("click", () => {
                const elements = document.querySelectorAll("[custom-attr]");
                elements.forEach((el, index) => {
                    el.setAttribute("new-attr", \`new-value-\${index + 1}\`);
                });
            });
        });
    `;

  // Set the iframe content dynamically
  iframe.srcdoc = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Task 1 iFrame</title>
            <style>
                .highlight { background-color: yellow; }
            </style>
        </head>
        <body>
            <button id="changeColor">Change Color</button>
            <button id="toggleClass">Toggle Highlight</button>
            <button id="changeText">Change Text</button>
            <button id="toggleDisabled">Toggle Disabled</button>
            <button id="addAttribute">Add Attribute</button>

            <div id="id1">ID 1 Element</div>
            <div id="id2">ID 2 Element</div>
            <div class="class1">Class 1 Element</div>
            <div class="class1">Another Class 1 Element</div>
            <span>Tag Element 1</span>
            <span>Tag Element 2</span>
            <input name="name1" value="Input 1">
            <input name="name1" value="Input 2">
            <div custom-attr="value1">Custom Attribute Element 1</div>
            <div custom-attr="value2">Custom Attribute Element 2</div>

            <script>
                ${task1JsContent}
            </script>
        </body>
        </html>
    `;
});
document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("task1Frame");

  // Define the Task 1 JS content
  const task1JsContent = `
      document.addEventListener("DOMContentLoaded", () => {
          document.getElementById("changeColor").addEventListener("click", () => {
              const colors = ["red", "blue", "green", "purple", "orange"];
              const id1 = document.getElementById("id1");
              const id2 = document.getElementById("id2");
              const randomColor = colors[Math.floor(Math.random() * colors.length)];
              id1.style.color = randomColor;
              id2.style.color = randomColor;
          });
  
          document.getElementById("toggleClass").addEventListener("click", () => {
              const elements = document.getElementsByClassName("class1");
              for (const element of elements) {
                  element.classList.toggle("highlight");
              }
          });
  
          document.getElementById("changeText").addEventListener("click", () => {
              const spans = document.getElementsByTagName("span");
              for (let i = 0; i < spans.length; i++) {
                  spans[i].innerHTML = \`Updated Tag Element \${i + 1}\`;
              }
          });
  
          document.getElementById("toggleDisabled").addEventListener("click", () => {
              const inputs = document.getElementsByName("name1");
              inputs.forEach((input) => {
                  input.disabled = !input.disabled;
              });
          });
  
          document.getElementById("addAttribute").addEventListener("click", () => {
              const elements = document.querySelectorAll("[custom-attr]");
              elements.forEach((el, index) => {
                  el.setAttribute("new-attr", \`new-value-\${index + 1}\`);
              });
          });
      });
    `;

  // Set the iframe content dynamically
  iframe.srcdoc = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Task 1 iFrame</title>
          <style>
              .highlight { background-color: yellow; }
          </style>
      </head>
      <body>
          <button id="changeColor">Change Color</button>
          <button id="toggleClass">Toggle Highlight</button>
          <button id="changeText">Change Text</button>
          <button id="toggleDisabled">Toggle Disabled</button>
          <button id="addAttribute">Add Attribute</button>
  
          <div id="id1">ID 1 Element</div>
          <div id="id2">ID 2 Element</div>
          <div class="class1">Class 1 Element</div>
          <div class="class1">Another Class 1 Element</div>
          <span>Tag Element 1</span>
          <span>Tag Element 2</span>
          <input name="name1" value="Input 1">
          <input name="name1" value="Input 2">
          <div custom-attr="value1">Custom Attribute Element 1</div>
          <div custom-attr="value2">Custom Attribute Element 2</div>
  
          <script>
              ${task1JsContent}
          </script>
      </body>
      </html>
    `;
});
