const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20;
const canvasSize = 400;

let snake = [{ x: box * 5, y: box * 5 }];
let food = {
	x: Math.floor(Math.random() * (canvasSize / box)) * box,
	y: Math.floor(Math.random() * (canvasSize / box)) * box,
};
let direction = null;
let score = 0;

function drawBoard() {
	ctx.fillStyle = "#222";
	ctx.fillRect(0, 0, canvasSize, canvasSize);
}

function drawSnake() {
	ctx.fillStyle = "green";
	snake.forEach((segment) => {
		ctx.fillRect(segment.x, segment.y, box, box);
	});
}

function drawFood() {
	ctx.fillStyle = "red";
	ctx.fillRect(food.x, food.y, box, box);
}

function moveSnake() {
	const head = { ...snake[0] };
	if (direction === "UP") head.y -= box;
	if (direction === "DOWN") head.y += box;
	if (direction === "LEFT") head.x -= box;
	if (direction === "RIGHT") head.x += box;

	if (head.x === food.x && head.y === food.y) {
		score++;
		document.getElementById("score").textContent = score;
		food.x = Math.floor(Math.random() * (canvasSize / box)) * box;
		food.y = Math.floor(Math.random() * (canvasSize / box)) * box;
	} else {
		snake.pop();
	}

	snake.unshift(head);
}

function checkCollision() {
	const head = snake[0];
	if (
		head.x < 0 ||
		head.x >= canvasSize ||
		head.y < 0 ||
		head.y >= canvasSize ||
		snake
			.slice(1)
			.some((segment) => segment.x === head.x && segment.y === head.y)
	) {
		clearInterval(game);
		alert("Game Over!");
		window.location.reload();
	}
}

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
	if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
	if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
	if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
});

function gameLoop() {
	drawBoard();
	drawFood();
	drawSnake();
	moveSnake();
	checkCollision();
}

const game = setInterval(gameLoop, 200);
//  iframe - security
// ShadowDOM - isolation
