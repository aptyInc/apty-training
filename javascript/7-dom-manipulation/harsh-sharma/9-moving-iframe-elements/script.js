document.addEventListener('DOMContentLoaded', () => {
    const iframe = document.getElementById('iframe');
    iframe.addEventListener('load', () => {
      const iframeDoc = iframe.contentDocument;
  
      function moveUp(button) {
        const row = button.closest('tr');
        const previousRow = row.previousElementSibling;
        if (previousRow && previousRow.tagName === 'TR') {
          row.parentNode.insertBefore(row, previousRow);
        }
      }
  
      function moveDown(button) {
        const row = button.closest('tr');
        const nextRow = row.nextElementSibling;
        if (nextRow && nextRow.tagName === 'TR') {
          row.parentNode.insertBefore(nextRow, row);
        }
      }
  
      function moveTop(button) {
        const row = button.closest('tr');
        const tableBody = row.parentNode;
        tableBody.insertBefore(row, tableBody.firstElementChild);
      }
  
      function moveBottom(button) {
        const row = button.closest('tr');
        const tableBody = row.parentNode;
        tableBody.appendChild(row);
      }
  
      const buttons = iframeDoc.querySelectorAll('button');
      buttons.forEach((button) => {
        if (button.id.startsWith('up-')) {
          button.onclick = () => moveUp(button);
        } else if (button.id.startsWith('down-')) {
          button.onclick = () => moveDown(button);
        } else if (button.id.startsWith('top-')) {
          button.onclick = () => moveTop(button);
        } else if (button.id.startsWith('bottom-')) {
          button.onclick = () => moveBottom(button);
        }
      });
    });
  });
  