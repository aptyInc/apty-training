const keydownDiv = document.getElementById('keydownDiv');

  const keyupDiv = document.getElementById('keyupDiv');


  window.addEventListener('keydown', (e) => {

    keydownDiv.innerText = e.key + (e.ctrlKey ? ' + Ctrl' : '') + (e.shiftKey ? ' + Shift' : '') + (e.altKey ? ' + Alt' : '');
  });


  window.addEventListener('keyup', (e) => {

    keyupDiv.innerText = e.key + (e.ctrlKey ? ' + Ctrl' : '') + (e.shiftKey ? ' + Shift' : '') + (e.altKey ? ' + Alt' : '');
  });
  