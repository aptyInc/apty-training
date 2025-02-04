function modifyTheColors() {
    const colors = ["Red", "Blue", "Green", "Yellow"];


    const blueIndex = colors.indexOf("Blue");
    if (blueIndex !== -1) {
      colors[blueIndex] = "Purple";
    }

    const yellowIndex = colors.indexOf("Yellow");
    if (yellowIndex !== -1) {
      colors.splice(yellowIndex + 1, 0, "Orange");
    }

    const greenIndex = colors.indexOf("Green");
    if (greenIndex !== -1) {
      colors.splice(greenIndex, 1);
    }

  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p><strong>Modified Colors Array:</strong> ${colors.join(', ')}</p>`;
  }