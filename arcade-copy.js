const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasWidth = 800;
const canvasHeight = 500;
let x = 25;
let y = 25;
let isMoving = 'normal' // normal, topToBottom, bottomToTop, leftToRight, rightToLeft

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
        ctx.drawImage(img, x, y, 62.5, 75);
        obstacles()
        playerMovement()
        if (y === 425 || y === 25 || x === 25 || x === 725) {
            isMoving = 'normal'
        }
    }, 5);
};

function remove() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

function playerMovement() {
    if (isMoving === 'topToBottom') {
        y += moveY;
    }
    if (isMoving === 'bottomToTop') {
        y -= moveY;
    }
    if (isMoving === 'leftToRight') {
        x += moveX;
    }
    if (isMoving === 'rightToLeft') {
        x -= moveX;
    }
    if (isMoving === 'normal') {
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
}

function jump() {
    if (y === 25) {
        isMoving = 'topToBottom'
    } else if (y === 425) {
        isMoving = 'bottomToTop'
    } else if (x === 25) {
        isMoving = 'leftToRight'
    } else if (x === 725) {
        isMoving = 'rightToLeft'
    }

    console.log('---->')
}

function jumpBottom() {
    y += moveY;
}


document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 32:
            jump();
            break;
    }
})


function obstacles() {
    ctx.fillStyle = 'coral';
    ctx.fillRect(100, 250, 250, 1);
    ctx.fillRect(450, 250, 250, 1);
}

