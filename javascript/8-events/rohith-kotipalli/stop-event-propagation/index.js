const parentDiv = document.getElementById('parentDiv');
const childDiv = document.getElementById('childDiv');
const logContainer = document.getElementById('logContainer');

    function logMessage(message) {
      const logItem = document.createElement('p');
      logItem.textContent = message;
      logContainer.appendChild(logItem);

      logContainer.scrollTop = logContainer.scrollHeight;
    }

    parentDiv.addEventListener('click', () => {
      alert('Parent Div Clicked');
      logMessage('Parent Div Clicked');
    });

    childDiv.addEventListener('click', (event) => {
      alert('Child Div Clicked');
      logMessage('Child Div Clicked');
      event.stopPropagation();
    });