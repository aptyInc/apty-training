const iframe = document.getElementById('iframe');
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

      iframeDoc.open();
      iframeDoc.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Interactive Table</title>
            <style>
              .toggle-bg {
                background-color: yellow;
              }
            </style>
          </head>
          <body>
            <table border="1">
              <thead>
                <tr>
                  <th>id</th>
                  <th>className</th>
                  <th>tag</th>
                  <th>name</th>
                  <th>attribute</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p id="para1">Paragraph 1</p>
                    <p id="para2">Paragraph 2</p>
                    <p id="para3">Paragraph 3</p>
                  </td>
                  <td>
                    <p class="class1">Class 1</p>
                    <p class="class1">Class 2</p>
                    <p class="class1">Class 3</p>
                  </td>
                  <td>
                    <span>Span 1</span>
                    <span>Span 2</span>
                    <span>Span 3</span>
                  </td>
                  <td>
                    <input type="text" name="input1" value="Input 1" />
                    <input type="text" name="input2" value="Input 2" />
                    <input type="text" name="input3" value="Input 3" />
                  </td>
                  <td>
                    <p data-custom="value1">Custom 1</p>
                    <p data-custom="value2">Custom 2</p>
                    <p data-custom="value3">Custom 3</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </body>
        </html>
      `);
      iframeDoc.close();

      // Functions to manipulate iframe content from outside

      function changeTextColorById() {
        const ids = ["para1", "para2", "para3"];
        ids.forEach((id) => {
          const element = iframeDoc.getElementById(id);
          element.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        });
      }

      function toggleClassName() {
        const elements = iframeDoc.getElementsByClassName("class1");
        Array.from(elements).forEach((element) => {
          if (element.classList.contains("toggle-bg")) {
            element.classList.remove("toggle-bg");
          } else {
            element.classList.add("toggle-bg");
          }
        });
      }

      function changeInnerHTML() {
        const elements = iframeDoc.getElementsByTagName("span");
        Array.from(elements).forEach((element, index) => {
          element.innerHTML = `Updated Span ${index + 1}`;
        });
      }

      function toggleDisabledByName() {
        const names = ["input1", "input2", "input3"];
        names.forEach((name) => {
          const inputs = iframeDoc.getElementsByName(name);
          Array.from(inputs).forEach((input) => {
            input.disabled = !input.disabled;
          });
        });
      }

      function addCustomAttribute() {
        let customElements = iframeDoc.querySelectorAll("[data-custom]");
        customElements.forEach((element, index) => {
          let newValue = "newValue" + (index + 1);
          element.setAttribute("data-new", newValue);
          element.innerHTML += ` (data-new: ${newValue})`;
        });
      }