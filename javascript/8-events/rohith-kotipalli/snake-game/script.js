const gridSize = 18;
let inputDirection = { x: 0, y: 0 };
let score = 0;
let highScoreVal = 0;


const foodSound = new Audio('./snake-game-assets/food.mp3');
const gameOverSound = new Audio('./snake-game-assets/gameover.mp3');
const moveSound = new Audio('./snake-game-assets/move.mp3');
const musicSound = new Audio('./snake-game-assets/music.mp3');


const scoreEle = document.getElementById('score');
const gameOverCard = document.getElementById('gameovercard');
const playBtn = document.getElementById('playBtn');
const board = document.getElementById('snakeboard');
const highScoreEle = document.getElementById('highScore');


let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 9 };

let highScore = localStorage.getItem('highscore');
if (!highScore) {
    highScoreVal = 0;
    localStorage.setItem('highscore', JSON.stringify(highScoreVal));
} else {
    highScoreVal = JSON.parse(highScore);
    highScoreEle.innerText = highScoreVal;
    document.getElementById('cardhighscore').innerText = highScoreVal;
}


function isCollide(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].x === arr[0].x && arr[i].y === arr[0].y) return true;
    }
    return (
        arr[0].x >= gridSize || arr[0].x <= 0 || arr[0].y <= 0 || arr[0].y >= gridSize
    );
}

function gameEngine() {
    board.innerHTML = "";

    if (isCollide(snakeArr)) {
        document.getElementById('cardscore').innerText = score;
        document.getElementById('cardhighscore').innerText = highScoreVal;
        gameOverSound.play();
        musicSound.pause();
        gameOverCard.style.display = 'block';
        inputDirection = { x: 0, y: 0 };
        clearInterval(gameInterval);

        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
        scoreEle.innerText = score;
        return;
    }

    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        snakeArr.unshift({
            x: snakeArr[0].x + inputDirection.x,
            y: snakeArr[0].y + inputDirection.y,
        });
        score++;
        scoreEle.innerText = score;

        if (score > highScoreVal) {
            highScoreVal = score;
            localStorage.setItem('highscore', JSON.stringify(highScoreVal));
            highScoreEle.innerText = highScoreVal;   
        }

        const a = 2;
        const b = gridSize - 1;
        food = {
            x: Math.round(a + (b - a) * Math.random()),
            y: Math.round(a + (b - a) * Math.random()),
        };
    }

    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }
    snakeArr[0].x += inputDirection.x;
    snakeArr[0].y += inputDirection.y;

    snakeArr.forEach((ele, index) => {
        const snakeEle = document.createElement('div');
        snakeEle.style.gridRowStart = ele.y;
        snakeEle.style.gridColumnStart = ele.x;
        snakeEle.classList.add(index === 0 ? 'head' : 'snake');
        board.appendChild(snakeEle);
    });

    const foodEle = document.createElement('div');
    foodEle.style.gridRowStart = food.y;
    foodEle.style.gridColumnStart = food.x;
    foodEle.classList.add('food');
    board.appendChild(foodEle);
}

let gameInterval;

function startGame() {
    gameInterval = setInterval(gameEngine, 200);
}

function restartGame() {
    gameOverCard.style.display = 'none';
    inputDirection = { x: 0, y: 1 };
    snakeArr = [{ x: 13, y: 15 }];
    score = 0;
    scoreEle.innerText = score;
    musicSound.play();
    startGame();
}

document.addEventListener('keydown', (evt) => {
    moveSound.play();
    switch (evt.key) {
        case 'ArrowUp':
            if (inputDirection.y !== 1) inputDirection = { x: 0, y: -1 };
            break;
        case 'ArrowDown':
            if (inputDirection.y !== -1) inputDirection = { x: 0, y: 1 };
            break;
        case 'ArrowLeft':
            if (inputDirection.x !== 1) inputDirection = { x: -1, y: 0 };
            break;
        case 'ArrowRight':
            if (inputDirection.x !== -1) inputDirection = { x: 1, y: 0 };
            break;
    }
});

playBtn.addEventListener('click', restartGame);
