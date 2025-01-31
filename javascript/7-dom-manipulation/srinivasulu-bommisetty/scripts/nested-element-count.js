function countElements() {
    const firstLevelParents = document.body.children;
    let elementCounts = {};

    for (let i = 0; i < firstLevelParents.length; i++) {
      let parent = firstLevelParents[i];
      let nestedElements = parent.getElementsByTagName('*');  

      elementCounts[parent.tagName.toLowerCase()] = nestedElements.length;
    }

    const resultList = document.getElementById('elementCounts');
    resultList.innerHTML = '';

    for (const [parentType, count] of Object.entries(elementCounts)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${parentType}: ${count} nested elements`;
      resultList.appendChild(listItem);
    }
  }