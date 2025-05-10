const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score-value");
const finalScoreElement = document.getElementById("final-score");
const gameOverElement = document.getElementById("game-over");

// Game constants
const GRID_SIZE = 20;
const CELL_SIZE = 20;
canvas.width = GRID_SIZE * CELL_SIZE;
canvas.height = GRID_SIZE * CELL_SIZE;

// Game variables
let snake = [{ x: 10, y: 10 }];
let food = generateFood();
let direction = "right";
let score = 0;
let gameSpeed = 150;
let gameLoop;
let gameRunning = true;

// Generate random food position
function generateFood() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
    };
}

// Draw snake segment
function drawSnakeSegment(segment) {
    ctx.fillStyle = "#0000FF";
    ctx.fillRect(
        segment.x * CELL_SIZE,
        segment.y * CELL_SIZE,
        CELL_SIZE - 1,
        CELL_SIZE - 1
    );
}

// Draw food
function drawFood() {
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(
        food.x * CELL_SIZE + CELL_SIZE / 2,
        food.y * CELL_SIZE + CELL_SIZE / 2,
        CELL_SIZE / 2 - 1,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

// Clear the canvas
function clearBoard() {
    ctx.fillStyle = "#90EE90";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Update game state
function update() {
    const head = { ...snake[0] };

    // Move snake
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    // Check collision with walls
    if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
    ) {
        gameOver();
        return;
    }

    // Check collision with self
    if (
        snake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
        gameOver();
        return;
    }

    // Add new head
    snake.unshift(head);

    // Check if food is eaten
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        scoreElement.textContent = score;
        food = generateFood();
        // Increase speed
        if (gameSpeed > 50) {
            gameSpeed -= 2;
            clearInterval(gameLoop);
            gameLoop = setInterval(gameStep, gameSpeed);
        }
    } else {
        snake.pop();
    }
}

// Game over function
function gameOver() {
    gameRunning = false;
    clearInterval(gameLoop);
    finalScoreElement.textContent = score;
    gameOverElement.style.display = "block";
}

// Reset game
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    direction = "right";
    score = 0;
    gameSpeed = 150;
    scoreElement.textContent = score;
    food = generateFood();
    gameRunning = true;
    gameOverElement.style.display = "none";
    gameLoop = setInterval(gameStep, gameSpeed);
}

// Game step function
function gameStep() {
    clearBoard();
    update();
    snake.forEach(drawSnakeSegment);
    drawFood();
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
    if (!gameRunning) return;

    switch (event.key) {
        case "ArrowUp":
            if (direction !== "down") direction = "up";
            break;
        case "ArrowDown":
            if (direction !== "up") direction = "down";
            break;
        case "ArrowLeft":
            if (direction !== "right") direction = "left";
            break;
        case "ArrowRight":
            if (direction !== "left") direction = "right";
            break;
    }
});

// Start game
gameLoop = setInterval(gameStep, gameSpeed);