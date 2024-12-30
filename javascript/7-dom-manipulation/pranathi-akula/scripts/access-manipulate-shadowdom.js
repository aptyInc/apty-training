   // Access the Shadow Host
   const shadowHost = document.getElementById('shadow-host');
      
   // Attach Shadow DOM to the shadow host
   const shadowRoot = shadowHost.attachShadow({ mode: 'open' });

   // Write the table content inside the Shadow DOM
   shadowRoot.innerHTML = `
     <style>
       .toggle-bg {
         background-color: yellow;
       }
     </style>
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
   `;

   // Functions to manipulate shadow DOM content from outside

   // Change text color by ID
   function changeTextColorById() {
     const ids = ["para1", "para2", "para3"];
     ids.forEach((id) => {
       const element = shadowRoot.getElementById(id);
       if (element) {
         element.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
       }
     });
   }

   // Toggle background color for class elements
   function toggleClassName() {
     const elements = shadowRoot.querySelectorAll(".class1");
     elements.forEach((element) => {
       if (element.classList.contains("toggle-bg")) {
         element.classList.remove("toggle-bg");
       } else {
         element.classList.add("toggle-bg");
       }
     });
   }

   // Change innerHTML of all span elements
   function changeInnerHTML() {
     const elements = shadowRoot.querySelectorAll("span");
     elements.forEach((element, index) => {
       element.innerHTML = `Updated Span ${index + 1}`;
     });
   }

   // Toggle disabled state for input elements by name
   function toggleDisabledByName() {
     const names = ["input1", "input2", "input3"];
     names.forEach((name) => {
       const inputs = shadowRoot.querySelectorAll(`input[name="${name}"]`);
       inputs.forEach((input) => {
         input.disabled = !input.disabled;
       });
     });
   }

   // Add custom attribute to elements with a custom data attribute
   function addCustomAttribute() {
     const customElements = shadowRoot.querySelectorAll("[data-custom]");
     customElements.forEach((element, index) => {
       let newValue = "newValue" + (index + 1);
       element.setAttribute("data-new", newValue);
       element.innerHTML += ` (data-new: ${newValue})`;
     });
   }