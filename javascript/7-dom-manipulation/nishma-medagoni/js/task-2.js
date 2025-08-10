document.addEventListener("DOMContentLoaded", () => {
  const iframeContent = `
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Accessing and Manipulating Elements</title>
                    <link rel="stylesheet" href="../css/task-1.css" />
                </head>
                <body>
                    <header>
                        Accessing and Manipulating Elements
                    </header>
                    <main>
                        <table>
                            <tr>
                                <th>id</th>
                                <th>className</th>
                                <th>tag</th>
                                <th>name</th>
                                <th>attribute</th>
                            </tr>
                            <tr>
                                <td><p id="id_1">id_1</p></td>
                                <td><p class="myClass">Paragraph 1</p></td>
                                <td><span>Span 1</span></td>
                                <td><input type="text" name="name1" value="Input 1"></td>
                                <td><p data-custom="custom1">custom attribute 1</p></td>
                            </tr>
                            <tr>
                                <td><p id="id_2">id_2</p></td>
                                <td><p class="myClass">Paragraph 2</p></td>
                                <td><span>Span 2</span></td>
                                <td><input type="text" name="name2" value="Input 2"></td>
                                <td><p data-custom="custom2">custom attribute 2</p></td>
                            </tr>
                            <tr>
                                <td><p id="id_3">id_3</p></td>
                                <td><p class="myClass">Paragraph 3</p></td>
                                <td><span>Span 3</span></td>
                                <td><input type="text" name="name3" value="Input 3"></td>
                                <td><p data-custom="custom3">custom attribute 3</p></td>
                            </tr>
                        </table>
                    </main>
                    <footer>
                        © 2024 Javascript Assignments
                    </footer>
                </body>
                </html>
            `;

  const iframe = document.getElementById("iframe")
  const iframeDoc = iframe.contentWindow.document


  iframeDoc.open()
  iframeDoc.write(iframeContent)
  iframeDoc.close()

  function getRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"
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
    const paras = [
      iframeDoc.getElementById("id_1"),
      iframeDoc.getElementById("id_2"),
      iframeDoc.getElementById("id_3"),
    ];
    paras.forEach((p) => {
      p.style.color = getRandomColor()
    })
  })

 
  class_button.addEventListener("click", () => {
    const elements = iframeDoc.getElementsByClassName("myClass")
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("highlight")
    }
  })

  
  tag_button.addEventListener("click", () => {
    const spans = iframeDoc.getElementsByTagName("span")
    for (let i = 0; i < spans.length; i++) {
      spans[i].innerHTML = `Updated Span ${i + 1}`
    }
  })

 
  name_button.addEventListener("click", () => {
    const names = ["name1", "name2", "name3"]
    names.forEach((each) => {
      const inputs = iframeDoc.getElementsByName(each)
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].disabled = !inputs[i].disabled
      }
    })
  })

  
  attributeButton.addEventListener("click", () => {
    const paras = iframeDoc.querySelectorAll("[data-custom]")
    paras.forEach((p) => {
      p.setAttribute("data-new-attr", "NewAttributeValue")
    })
  })
})
