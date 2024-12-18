document.addEventListener("DOMContentLoaded", () => {
    const shadowContent = `
      <table>
          <tr>
              <th>id</th>
              <th>className</th>
              <th>tag</th>
              <th>name</th>
              <th>attribute</th>
          </tr>
          <tr>
              <td>
                  <p id="id_1">id_1</p>
              </td>
              <td>
                  <p class="myClass">Paragraph 1</p>
              </td>
              <td>
                  <span>Span 1</span>
              </td>
              <td>
                  <input type="text" name="name1" value="Input 1">
              </td>
              <td>
                  <p data-custom="custom1">custom attribute 1</p>
              </td>
          </tr>
          <tr>
              <td>
                  <p id="id_2">id_2</p>
              </td>
              <td>
                  <p class="myClass">Paragraph 2</p>
              </td>
              <td>
                  <span>Span 2</span>
              </td>
              <td>
                  <input type="text" name="name2" value="Input 2">
              </td>
              <td>
                  <p data-custom="custom2">custom attribute 2</p>
              </td>
          </tr>
          <tr>
              <td>
                  <p id="id_3">id_3</p>
              </td>
              <td>
                  <p class="myClass">Paragraph 2</p>
              </td>
              <td>
                  <span>Span 3</span>
              </td>
              <td>
                  <input type="text" name="name3" value="Input 3">
              </td>
              <td>
                  <p data-custom="custom3">custom attribute 3</p>
              </td>
          </tr>
      </table>
    `;
  
    
    const shadowContainer = document.getElementById("shadow-container")
    const shadowRoot = shadowContainer.attachShadow({ mode: "open" })
    shadowRoot.innerHTML = shadowContent;
  
    
    function getRandomColor() {
      const letters = "0123456789ABCDEF"
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }

    const id_button = document.getElementById("id_button")
    const class_button = document.getElementById("class_button")
    const tag_button = document.getElementById("tag_button")
    const name_button = document.getElementById("name_button")
    const attributeButton = document.getElementById("custom_attribute_button")
  
    id_button.addEventListener("click", () => {
      const paras = shadowRoot.querySelectorAll("#id_1, #id_2, #id_3")
      paras.forEach((p) => {
        p.style.color = getRandomColor()
      })
    })

    class_button.addEventListener("click", () => {
      const elements = shadowRoot.querySelectorAll(".myClass")
      elements.forEach((element) => {
        element.classList.toggle("highlight")
      })
    })
  
   
    tag_button.addEventListener("click", () => {
      const spans = shadowRoot.querySelectorAll("span")
      spans.forEach((span, index) => {
        span.textContent = `Updated Span ${index + 1}`
      })
    })
  
    
    name_button.addEventListener("click", () => {
      const inputs = shadowRoot.querySelectorAll("input[name^='name']")
      inputs.forEach((input) => {
        input.disabled = !input.disabled
      })
    })
  
    
    attributeButton.addEventListener("click", () => {
      const paras = shadowRoot.querySelectorAll("[data-custom]")
      paras.forEach((p) => {
        p.setAttribute("data-new-attr", "NewAttributeValue")
      })
    })
  })
  