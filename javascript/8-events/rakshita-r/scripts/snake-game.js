

 
 
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
const gridSize = 20;
let snake = [{ x: gridSize * 5, y: gridSize * 5 }];
let direction = { x: 1, y: 0 }; // Initial direction (right)
let food = getRandomFoodPosition();
let score = 0;
// Main game loop
function gameLoop() {
  moveSnake();
  if (isGameOver()) {
    alert(`Game Over! Your score: ${score}`);
    resetGame();
    return;
  }
  if (didEatFood()) {
    score++;
    snake.push({}); // Grow the snake
    food = getRandomFoodPosition();
  }
  drawGame();
  setTimeout(gameLoop, 100);
}
// Draw the game (snake and food)
function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw the snake
  ctx.fillStyle = "lime";
  snake.forEach((segment) =>
    ctx.fillRect(segment.x, segment.y, gridSize, gridSize)
  );
  // Draw the food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, gridSize, gridSize);
}
// Move the snake
function moveSnake() {
  const head = {
    x: snake[0].x + direction.x * gridSize,
    y: snake[0].y + direction.y * gridSize,
  };
  snake.unshift(head); // Add new head
  snake.pop(); // Remove tail
}
// Check if the game is over
function isGameOver() {
  const head = snake[0];
  // Check wall collision
  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= canvas.width ||
    head.y >= canvas.height
  ) {
    return true;
  }
  // Check self collision
  return snake
    .slice(1)
    .some((segment) => segment.x === head.x && segment.y === head.y);
}
// Check if the snake ate the food
function didEatFood() {
  return snake[0].x === food.x && snake[0].y === food.y;
}
// Generate a random position for the food
function getRandomFoodPosition() {
  return {
    x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
    y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
  };
}
// Reset the game
function resetGame() {
  snake = [{ x: gridSize * 5, y: gridSize * 5 }];
  direction = { x: 1, y: 0 }; // Reset direction to right
  food = getRandomFoodPosition();
  score = 0;
  gameLoop();
}
// Handle keyboard input for direction changes
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});
// Start the game
gameLoop();
 
 
 
 