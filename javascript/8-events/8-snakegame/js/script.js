const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

// Class for snake parts
class SnakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 7;
let tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

let headX = 10;
let headY = 10;

const snakeParts = [];
let tailLength = 1;

let appleX = 5;
let appleY = 5;

let xVelocity = 0;
let yVelocity = 0;

let score = 0;

// Main game loop
function drawGame() {
    changeSnakePosition();
    const result = isGameOver();
    if (result) {
        return;
    }

    clearScreen();
    checkAppleCollision();
    drawApple();
    drawSnake();
    drawScore();

    setTimeout(drawGame, 1000 / speed);
}

// Check if the game is over
function isGameOver() {
    // The game should not end if the snake hasn't started moving
    if (xVelocity === 0 && yVelocity === 0) {
        return false;
    }

    let gameOver = false;

    // Check collision with walls
    if (headX < 0 || headX >= tileCount || headY < 0 || headY >= tileCount) {
        gameOver = true;
    }

    // Check collision with itself
    for (let i = 0; i < snakeParts.length; i++) {
        const part = snakeParts[i];
        if (part.x === headX && part.y === headY) {
            gameOver = true;
            break;
        }
    }

    if (gameOver) {
        ctx.fillStyle = "white";
        ctx.font = "50px Verdana";

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");

        ctx.fillStyle = gradient;
        ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
    }

    return gameOver;
}

// Draw the score
function drawScore() {
    ctx.fillStyle = "white";
    ctx.font = "10px Verdana";
    ctx.fillText("Score: " + score, canvas.width - 60, 10);
}

// Clear the canvas
function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw the snake
function drawSnake() {
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileSize, headY * tileSize, tileSize, tileSize);

    ctx.fillStyle = "green";
    for (let i = 0; i < snakeParts.length; i++) {
        const part = snakeParts[i];
        ctx.fillRect(part.x * tileSize, part.y * tileSize, tileSize, tileSize);
    }

    snakeParts.push(new SnakePart(headX, headY));
    while (snakeParts.length > tailLength) {
        snakeParts.shift();
    }
}

// Update snake position
function changeSnakePosition() {
    headX += xVelocity;
    headY += yVelocity;
}

// Draw the apple
function drawApple() {
    ctx.fillStyle = "red";
    ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);
}

// Check if the snake has eaten the apple
function checkAppleCollision() {
    if (appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
    }
}

// Handle keyboard input for snake movement
document.body.addEventListener("keydown", keyDown);

function keyDown(event) {
    // Up
    if (event.keyCode === 38 && yVelocity !== 1) {
        yVelocity = -1;
        xVelocity = 0;
    }
    // Down
    if (event.keyCode === 40 && yVelocity !== -1) {
        yVelocity = 1;
        xVelocity = 0;
    }
    // Left
    if (event.keyCode === 37 && xVelocity !== 1) {
        yVelocity = 0;
        xVelocity = -1;
    }
    // Right
    if (event.keyCode === 39 && xVelocity !== -1) {
        yVelocity = 0;
        xVelocity = 1;
    }
}

// Start the game
drawGame();
