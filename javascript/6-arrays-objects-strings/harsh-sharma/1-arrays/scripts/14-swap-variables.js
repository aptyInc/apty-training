function handleOnSubmit(event) {
    event.preventDefault();
    const output_div = document.querySelector('.output');
    const a = parseInt(document.querySelector('#input_a').value, 10);
    const b = parseInt(document.querySelector('#input_b').value, 10);
  
    if (isNaN(a) || isNaN(b)) {
      output_div.innerText = `Please enter valid numbers.`;
      return;
    }
  
    // Swap values using array destructuring
    let x = a;
    let y = b;
    [x, y] = [y, x];
  
    output_div.innerText = `After swap: a = ${x}, b = ${y}`;
  }
  