const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const canvasSize = 400;
let snake = [{x: 200, y: 200}];
let food = {x: 100, y: 100};
let dx = gridSize;
let dy = 0;
let score = 0;
let gameOver = false;

document.addEventListener('keydown', handleKeyPress);

function gameLoop() {
    if (gameOver) return;

    setTimeout(() => {
        clearCanvas();
        moveSnake();
        checkCollisions();
        drawFood();
        drawSnake();
        drawScore();
        gameLoop();
    }, 100);
}

function clearCanvas() {
    ctx.fillStyle = '#222'; // Matches the canvas background color
    ctx.fillRect(0, 0, canvasSize, canvasSize);
}

function drawSnake() {
    snake.forEach((part) => {
        ctx.fillStyle = 'lime';
        ctx.strokeStyle = '#000';
        ctx.fillRect(part.x, part.y, gridSize, gridSize);
        ctx.strokeRect(part.x, part.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '18px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

function moveSnake() {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        generateFood();
    } else {
        snake.pop();
    }
}

function handleKeyPress(event) {
    if (gameOver) {
        restartGame();
        return;
    }

    switch (event.key) {
        case 'ArrowUp':
            if (dy === 0) {
                dx = 0;
                dy = -gridSize;
            }
            break;
        case 'ArrowDown':
            if (dy === 0) {
                dx = 0;
                dy = gridSize;
            }
            break;
        case 'ArrowLeft':
            if (dx === 0) {
                dx = -gridSize;
                dy = 0;
            }
            break;
        case 'ArrowRight':
            if (dx === 0) {
                dx = gridSize;
                dy = 0;
            }
            break;
    }
}

function generateFood() {
    let x, y;
    do {
        x = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
        y = Math.floor(Math.random() * (canvasSize / gridSize)) * gridSize;
    } while (snake.some((part) => part.x === x && part.y === y));
    food = {x: x, y: y};
}

function checkCollisions() {
    const head = snake[0];

    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        endGame();
    }

    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }
}

function endGame() {
    gameOver = true;
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.fillText('Game Over!', canvasSize / 4, canvasSize / 2);
    ctx.fillText('Press any key to restart', canvasSize / 6, canvasSize / 1.5);
}

function restartGame() {
    gameOver = false;
    snake = [{x: 200, y: 200}];
    food = {x: 100, y: 100};
    dx = gridSize;
    dy = 0;
    score = 0;
    gameLoop();
}

gameLoop();
