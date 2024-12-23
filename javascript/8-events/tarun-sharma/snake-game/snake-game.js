const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const gridSize = 15; 
    let snake = [{ x: 5, y: 5 }]; 
    let food = { x: 7, y: 7 }; 
    let direction = 'RIGHT'; 

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);


      ctx.fillStyle = 'green';
      for (let segment of snake) {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
      }

      
      ctx.fillStyle = 'red';
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
    }

    
    function move() {
      let head = { ...snake[0] };

      if (direction === 'RIGHT') head.x++;
      if (direction === 'LEFT') head.x--;
      if (direction === 'UP') head.y--;
      if (direction === 'DOWN') head.y++;

      
      snake.unshift(head);

      
      if (head.x === food.x && head.y === food.y) {
        
        food = {
          x: Math.floor(Math.random() * (canvas.width / gridSize)),
          y: Math.floor(Math.random() * (canvas.height / gridSize)),
        };
      } else {
        
        snake.pop();
      }

      
      if (
        head.x < 0 ||
        head.y < 0 ||
        head.x >= canvas.width / gridSize ||
        head.y >= canvas.height / gridSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
      ) {
        alert('Game Over!');
        clearInterval(game);
      }
    }

    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
      if (e.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
      if (e.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
      if (e.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
    });

    
    function gameLoop() {
      move();
      draw();
    }

    const game = setInterval(gameLoop, 200); 