const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const animation = window.requestAnimationFrame


const canvasWidth = 800;
const canvasHeight = 500;
let x = 25;
let y = 25;
let isMoving = 'normal' // normal, topToBottom, bottomToTop, leftToRight, rightToLeft

const moveX = 10;
const moveY = 10;


const img = new Image();
img.src = './img/player.png'

const coin = new Image();
coin.src = './img/coin.png'


function game() {
    remove();
    ctx.strokeStyle = 'white';
    ctx.strokeRect(50, 50, 700, 400);
    ctx.drawImage(img, x, y, 40, 40);
    //ctx.drawImage(coin, 100, 100, 20, 20);
    drawCoins()
    obstacles()
    playerMovement()
    if (y === 425 || y === 25 || x === 25 || x === 725) {
        isMoving = 'normal'
    }
    const animation = window.requestAnimationFrame
    animation(game)
}

onload = () => {
    animation(game)
};

function remove() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
}

//------- cambiar sentido al hacer click

// function playerMovementReverse() {
//     if (isMoving === 'topToBottom') {
//         y -= moveY;
//     }
//     if (isMoving === 'bottomToTop') {
//         y += moveY;
//     }
//     if (isMoving === 'leftToRight') {
//         x -= moveX;
//     }
//     if (isMoving === 'rightToLeft') {
//         x += moveX;
//     }
//     if (isMoving === 'normal') {
//         if (y === 25) {
//             x -= moveX;
//         }
//         if (x === 725) {
//             x === 725;
//             y -= moveY
//         }
//         if (y === 425) {
//             y === 425;
//             x += moveX
//         }
//         if (x === 25) {
//             x === 25;
//             y += moveY
//         }

//     }
// }


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

//----------array de objetos: coins
/* let numan = [{
    //numan1 
    name: "coin1",
    x: 100,
    y: 100
},
{
    name: "coin2",
    x: 150,
    y: 150
},
{
    name: "coin3",
    x: 200,
    y: 200
}] */

function drawCoins() {
    const coin = new Image();
    coin.src = './img/coin.png'
    // ctx.drawImage(coin, posX, posY, width, height);
    ctx.drawImage(coin, 280, 150, 20, 20);
    ctx.drawImage(coin, 330, 150, 20, 20);
    ctx.drawImage(coin, 380, 150, 20, 20);
    ctx.drawImage(coin, 430, 150, 20, 20);
    ctx.drawImage(coin, 480, 150, 20, 20);
    ctx.drawImage(coin, 705, 100, 20, 20);

    ctx.drawImage(coin, 75, 350, 20, 20);
    ctx.drawImage(coin, 280, 320, 20, 20);
    ctx.drawImage(coin, 330, 320, 20, 20);
    ctx.drawImage(coin, 380, 320, 20, 20);
    ctx.drawImage(coin, 430, 320, 20, 20);
    ctx.drawImage(coin, 480, 320, 20, 20);
    ctx.drawImage(coin, 705, 350, 20, 20);
}


//-------- borrador coins
/* function clearFirstCoin() {
    ctx.clearRect(75, 100, 20, 20);
} */

