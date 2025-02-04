let count = 0;
    document.getElementById('counterButton').addEventListener('click', () => {
      document.getElementById('counter').textContent = ++count;
    });