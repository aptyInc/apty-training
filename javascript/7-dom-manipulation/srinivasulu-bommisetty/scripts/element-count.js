function countElements() {
    const allElements = document.body.getElementsByTagName('*');
    let elementCounts = {};

    for (let i = 0; i < allElements.length; i++) {
      let element = allElements[i].tagName.toLowerCase();
      elementCounts[element] = (elementCounts[element] || 0) + 1;
    }

    const resultList = document.getElementById('elementCounts');
    resultList.innerHTML = '';

    for (const [elementType, count] of Object.entries(elementCounts)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${elementType}: ${count}`;
      resultList.appendChild(listItem);
    }
  }