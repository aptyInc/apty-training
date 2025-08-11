document.addEventListener("DOMContentLoaded", function () {
  let iframe = document.getElementById("myIframe");
  let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  let htmlContent = `
    <style>
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
      }
    </style>
    <table>
      <thead>
        <tr>
          <th>Unique ID</th>
          <th>Shared Class</th>
          <th>HTML Tag</th>
          <th>Element Name</th>
          <th>Custom Attribute</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p id="para1">Paragraph</p>
            <p id="para2">Paragraph</p>
          </td>
          <td>
            <p class="highlight">Paragraph with class="highlight"</p>
            <p class="highlight">Another paragraph with class="highlight"</p>
          </td>
          <td>
            <p>Paragraph tag</p>
            <span>Span 1</span>
            <span>Span 2</span>
          </td>
          <td>
            <input type="text" name="username" placeholder="Name=username" />
            <input type="text" name="email" placeholder="Name=email" />
          </td>
          <td>
            <p data-info="first">Paragraph with data-info</p>
          </td>
        </tr>
      </tbody>
    </table>
  `;
  iframeDoc.open();
  iframeDoc.write(htmlContent);
  iframeDoc.close();

  document.getElementById("btnIdColor").addEventListener("click", function () {
    let ids = ["para1", "para2"];
    ids.forEach((id) => {
      let el = iframeDoc.getElementById(id);
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      el.style.color = randomColor;
    });
  });

  document.getElementById("btnClassBg").addEventListener("click", function () {
    let elements = iframeDoc.getElementsByClassName("highlight");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor =
        elements[i].style.backgroundColor === "lightblue" ? "" : "lightblue";
    }
  });

  document.getElementById("btnSpanText").addEventListener("click", function () {
    let spans = iframeDoc.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = `Updated Span ${i + 1}<br>`;
    }
  });

  document.getElementById("btnToggleDisabled").addEventListener("click", function () {
    let inputs = iframeDoc.querySelectorAll("input[name]");
    inputs.forEach((input) => {
      input.disabled = !input.disabled;
    });
  });

  document.getElementById("btnAddAttr").addEventListener("click", function () {
    let el = iframeDoc.querySelector('[data-info="first"]');
    if (el) {
      el.setAttribute("data-added", "newValue");
      el.textContent += " (new attr added)";
    }
  });
});
