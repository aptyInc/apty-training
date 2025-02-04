let body=document.querySelector('body');
let host=document.getElementById('ig');
const shadowRoot=host.attachShadow({ mode: 'open' });
 shadowRoot.innerHTML=`
 <table border="1">
     <tr>
         <th>id</th>
         <th>className</th>
         <th>tag</th>
         <th>name</th>
         <th>attribute</th>
     </tr>
     
     <tr>
         <td>
             <p id="p1">This is p1</p>
             <p id="p2">This is p2</p>
             
         </td>
         
         <!-- Column ClassName -->
         <td>
             <p class="colorChange">Text 1</p>
             <p class="colorChange">Text 2</p>
             <p class="colorChange">Text 3</p>
           
         </td>
         
         <!-- Column Tag -->
         <td>
             <span>This is a span 1</span>
             <span>This is a span 2</span>
             <span>This is a span 3</span>
            
         </td>
         
         <!-- Column Name -->
         <td>
             <input type="text" name="input1" value="Value 1">
             <input type="text" name="input2" value="Value 2">
             <input type="text" name="input3" value="Value 3">
             
         </td>
         
         <!-- Column Attribute -->
         <td>
             <p data-custom="custom1">Custom attribute 1</p>
             <p data-custom="custom2">Custom attribute 2</p>
             <p data-custom="custom3">Custom attribute 3</p>
             
         </td>
     </tr>
 </table>`;

 
 
 function changeTextColor() {
         let p1 = shadowRoot.getElementById('p1');
         let p2 = shadowRoot.getElementById('p2');
         let colors = ['yellow', 'red', 'green', 'blue', 'orange', 'black', 'white', 'violet', 'purple'];
         let color = colors[Math.floor(Math.random() * colors.length)];
         p1.style.color = color;
         p2.style.color = color;
     }
     function toggleClassName() {
         let elements =  shadowRoot.querySelectorAll('.colorChange');
         let colors = ['yellow', 'red', 'green', 'blue', 'orange', 'black', 'white', 'violet', 'purple'];
         let color = colors[Math.floor(Math.random() * colors.length)];
         for (let i = 0; i < elements.length; i++) {
             elements[i].style.backgroundColor = color;
         }
     }
     function changeInnerHTML() {
         let spans = shadowRoot.querySelectorAll('span');
         for (let i = 0; i < spans.length; i++) {
             spans[i].innerHTML = 'Updated content of span ' + (i + 1);
         }
     }
     function toggleDisabled() {
         let inputs = shadowRoot.getElementsByName('input1');
         let allInputs = shadowRoot.getElementsByName('input2');
         let allInputs1 = shadowRoot.getElementsByName('input3');
         let inputsDisabled = inputs.length > 0 ? inputs[0].disabled : false;
         let newDisabledValue = !inputsDisabled;
         for (let input of inputs) {
             input.disabled = newDisabledValue;
         }
         for (let input of allInputs) {
             input.disabled = newDisabledValue;
         }
         for (let input of allInputs1) {
             input.disabled = newDisabledValue;
         }
     }
     function addCustomAttribute() {
         let elements = shadowRoot.querySelectorAll('[data-custom]');
         for (let i = 0; i < elements.length; i++) {
             elements[i].setAttribute('data-new-attribute', 'newValue');
         }
     }