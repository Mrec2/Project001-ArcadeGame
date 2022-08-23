//objeto global
const Game = {
    //---> canvas
    canvas: undefined,
    ctx: undefined,
    interval: undefined,
    width: 800,
    height: 500,
    widthGame: undefined,
    heightGame: undefined,
    //---> Timer
    counter: 0,
    secs: 120,
    chrono: undefined,
    //---> player
    player: undefined,
    playerImg: 'img/player2.png',
    playerWidth: 40,
    playerHeight: 40,
    isMoving: "normal",
    clockWise: true,
    //--->obstacles
    obstacles: [],
    obstacleX: undefined,
    obstacleY: undefined,
    obstacleWidth: undefined,
    obstacleHeight: undefined,
    //--->levels
    levelWidth: undefined,
    levelHeight: undefined,
    levelX: undefined,
    levelY: undefined,
    level: undefined,
    //--->coins

    coins: [],
    coinImg: 'img/coin.png',
    coinWidth: undefined,
    coinHeight: undefined,

    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.requestAnimationFrame = window.requestAnimationFrame;
        this.start();
    },

    setDimension() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    remove() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    start() {

        this.createAll()
        this.createInitialCoins();
        this.createObstacles()

        this.interval = setInterval(() => {
            this.counter++;
            this.timer();
            console.log(this.counter)
            if (this.counter === 67) {
                this.secs -= 1;
                this.counter = 0;
                console.log("entra en if de counter");
            }

            console.log(this.secs);
            this.remove();
            this.drawAll();
            this.clockWise ? this.player.playerMovement() : this.player.playerMovementReverse()
            this.checkCollision()
            this.gameOver();
        }, 15);
    },
    // drawRectangle(x, y, width, height) {
    //     this.ctx.strokeStyle = 'black';
    //     this.ctx.strokeRect(x, y, width, height);
    // },

    // drawImage(x, y, width, height) {
    //     const imgPlayer = new Image();
    //     img.src = './img/player.png'
    //     this.ctx.drawImage(imgPlayer, x, y, width, height);
    // },

    createAll() {
        this.level = new Levels(50, 50, 700, 400, this.ctx);
        this.player = new Player(this.playerImg, this.ctx);
    },

    createObstacles() {
        this.obstacles.push(new Obstacles(100, 250, 250, 250, this.ctx))
        this.obstacles.push(new Obstacles(550, 250, 700, 250, this.ctx))
        this.obstacles.push(new Obstacles(400, 300, 400, 400, this.ctx))
        this.obstacles.push(new Obstacles(400, 100, 400, 200, this.ctx))
    },

    createInitialCoins() {
        console.log("entra en createInitialCoins");
        this.coins.push(new Coin(this.coinImg, this.ctx, 75, 100, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 330, 150, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 380, 150, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 280, 150, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 430, 150, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 480, 150, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 705, 100, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 75, 350, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 280, 320, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 330, 320, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 380, 320, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 430, 320, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 480, 320, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 705, 350, 20, 20));


    },

    drawAll() {
        console.log("entra en drawAll")
        this.level.draw()
        this.player.draw()
        this.coins.forEach(e => {
            e.draw()
        });
        this.obstacles.forEach(e => {
            e.draw()
        });
    },

    gameOver() {
        if (this.secs === -1) {
            alert("You lose");
        }
    },

    timer() {
        this.chrono = document.getElementById("chrono");
        this.chrono.innerHTML = this.secs.toString();
    },

    checkCollision() {
        // playerX, playerY === coinX
    }



}

document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
        case 32:
            Game.player.jump();
            break;
    }
    Game.clockWise ? Game.clockWise = false : Game.clockWise = true
})

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

