// Get the canvas and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Game settings
const box = 20; // size of each square in the grid
const canvasSize = 400;
let score = 0;
let highScore = localStorage.getItem("highscore") || 0;

// Snake initialization
let snake = [{ x: 200, y: 200 }];
let direction = 'RIGHT';
let food = generateFood();
let gameInterval;

// Event listeners for controls
document.addEventListener("keydown", changeDirection);

// Start or Restart the game
function startGame() {
    // Reset game variables
    score = 0;
    snake = [{ x: 200, y: 200 }];
    direction = "RIGHT";
    food = generateFood();
    document.getElementById("score").textContent = score;

    // Hide the popup and start button
    document.getElementById("popup").style.display = "none";
    document.getElementById("startButton").style.display = "none";

    // Start the game loop
    gameInterval = setInterval(gameLoop, 200); // Slower speed (200ms interval)
}

// Main game loop
function gameLoop() {
    if (gameOver()) {
        showGameOver();
        clearInterval(gameInterval);
        return;
    }

    // Move snake
    moveSnake();

    // Check if snake eats food
    if (snake[0].x === food.x && snake[0].y === food.y) {
        score++;
        snake.push({}); // Add a new segment to the snake
        food = generateFood();
    }

    // Clear the canvas and redraw everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawFood();
    updateScoreboard();
}

// Draw snake on canvas
function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "#3e8e41" : "#5fbb66"; // Styled snake (darker and lighter green)
        ctx.strokeStyle = "#2c6b2f"; // Border for the snake
        ctx.lineWidth = 2;
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}

// Draw food on canvas
function drawFood() {
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(food.x + box / 2, food.y + box / 2, box / 2, 0, Math.PI * 2);
    ctx.fill();
}

// Move the snake
function moveSnake() {
    let head = { ...snake[0] };

    if (direction === "LEFT") head.x -= box;
    if (direction === "RIGHT") head.x += box;
    if (direction === "UP") head.y -= box;
    if (direction === "DOWN") head.y += box;

    snake.unshift(head); // Add new head to the snake
    snake.pop(); // Remove the last segment of the snake
}

// Change direction based on key press
function changeDirection(event) {
    if (event.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if (event.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    } else if (event.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if (event.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    }
}

// Generate random food coordinates
function generateFood() {
    let foodX = Math.floor(Math.random() * (canvasSize / box)) * box;
    let foodY = Math.floor(Math.random() * (canvasSize / box)) * box;
    return { x: foodX, y: foodY };
}

// Update scoreboard
function updateScoreboard() {
    document.getElementById("score").textContent = score;
    if (score > highScore) {
        highScore = score;
        document.getElementById("highscore").textContent = highScore;
        localStorage.setItem("highscore", highScore);
    }
}

// Check for collisions (wall or self)
function gameOver() {
    const head = snake[0];
    if (
        head.x < 0 || head.x >= canvasSize ||
        head.y < 0 || head.y >= canvasSize ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ) {
        return true;
    }
    return false;
}

// Show game over popup
function showGameOver() {
    document.getElementById("popup").style.display = "block";
}

// Start or Restart the game
function resetGame() {
    document.getElementById("startButton").style.display = "block";
    document.getElementById("popup").style.display = "none";
}
