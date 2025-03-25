const logContainer = document.getElementById('logContainer');

    function logMessage(message) {
      const logItem = document.createElement('p');
      logItem.textContent = message;
      logContainer.appendChild(logItem);

      logContainer.scrollTop = logContainer.scrollHeight;
    }

    // Level 1 (Capture Phase)
    document.getElementById('level1').addEventListener('click', function(event) {
      alert('Level 1 (Capture Phase)');
      logMessage('Level 1 (Capture Phase) triggered');
    }, true); 

    // Level 2 (Bubble Phase)
    document.getElementById('level2').addEventListener('click', function(event) {
      alert('Level 2 (Bubble Phase)');
      logMessage('Level 2 (Bubble Phase) triggered');
    }, false); 

    // Level 3 (Target Phase)
    document.getElementById('level3').addEventListener('click', function(event) {
      alert('Level 3 (Target Phase)');
      logMessage('Level 3 (Target Phase) triggered');
    });