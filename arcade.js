const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 500;
let x = 25;
let y = 25;

const moveX = 2;
const moveY = 2;

const jumpX = 5
const jumpY = 5


const img = new Image();
img.src = './img/player.png'


onload = () => {
    intervalId = setInterval(() => {
        remove();
        ctx.strokeStyle = 'white';
        ctx.strokeRect(50, 50, 700, 400);
        ctx.drawImage(img, x, y, 50, 50);
        playerMovement()
    }, 5);
};

function remove() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

function playerMovement() {
    if (y === 25) {
        x += moveX;
    }
    if (x === 725) {
        x === 725;
        y += moveY
    }
    if (y === 425) {
        y === 425;
        x -= moveX
    }
    if (x === 25) {
        x === 25;
        y -= moveY
    }
}

function jump() {
    setInterval(() => {
        if (y !== 425) {
            y += moveY;
        }
    }, 1);
    console.log('---->')
}


document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 32:
            jump();
            break;
    }
})

