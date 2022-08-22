//objeto global
const Game = {
    canvas: undefined,
    ctx: undefined,
    animation: undefined,
    width: 800,
    height: 500,
    widthGame: undefined,
    heightGame: undefined,
    player: undefined,
    playerWidth: 40,
    playerHeight: 40,
    obstacles: [],
    coins: [],
    x: 25,
    y: 25,
    moveX: 10,
    moveY: 10,

    init() {

        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        var requestAnimationFrame = window.requestAnimationFrame;
        // this.start();

        this.start();
    },

    setDimension() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    start() {
        console.log("inicio start");

        this.remove();
        let drawRectangle = new drawAll();
        drawRectangle.drawRectangle(50, 50, 700, 400);
        console.log("Errorrrrrrrrrrrrrrrrrr");
        requestAnimationFrame(start);

    },

    remove() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        console.log("entra en remove")

    }

}


/*

let isMoving = 'normal' // normal, topToBottom, bottomToTop, leftToRight, rightToLeft

const moveX = 10;
const moveY = 10;


const img = new Image();
img.src = './img/player.png'

const coin = new Image();
coin.src = './img/coin.png'


function game() {
    remove();

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

/*

function drawCoins() {
    const coin = new Image();
    coin.src = './img/coin.png'
    ctx.drawImage(coin, 75, 100, 20, 20);
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

*/

//-------- borrador coins
/* function clearFirstCoin() {
    ctx.clearRect(75, 100, 20, 20);
} */

