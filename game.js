const Game = {
    canvas: undefined,
    ctx: undefined,
    interval: undefined,
    fps: 60,
    width: 800,
    height: 500,

    counter: 0,
    secs: 40,
    chrono: undefined,

    player: undefined,
    playerImg: 'img/player2.png',
    isMoving: "normal",
    clockWise: true,

    obstacles: [],
    DeathByObs: false,

    level: undefined,

    coins: [],
    coinImg: 'img/coin.png',

    init() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.setDimensions();
        this.start();
    },

    setDimensions() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    remove() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    start() {
        this.createAll();
        this.interval = setInterval(() => {
            this.counter++;
            this.timer();
            if (this.counter === 67) {
                this.secs -= 1;
                this.counter = 0;
            }
            this.remove();
            this.setEventListeners();
            this.drawAll();
            this.clockWise ? this.player.playerMovement() : this.player.playerMovementReverse();
            this.obstacles.forEach(obstacle => this.checkObsCollision(obstacle));
            this.coins.forEach(coin => this.checkCoinsCollision(coin));
            this.gameOver()
            // this.checkObsCollision(this.obstacles);
            //this.checkCollision();
        }, 1000 / this.fps);
    },

    createAll() {
        this.level = new Levels(50, 50, 700, 400, this.ctx);
        this.player = new Player(this.playerImg, this.ctx);
        this.createInitialCoins();
        this.createObstacles();
    },

    createObstacles() {
        this.obstacles.push(new Obstacles(100, 250, 200, 2, this.ctx));
        this.obstacles.push(new Obstacles(500, 250, 200, 2, this.ctx));
        this.obstacles.push(new Obstacles(400, 100, 2, 100, this.ctx));
        this.obstacles.push(new Obstacles(400, 300, 2, 100, this.ctx));
    },

    createInitialCoins() {
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
        this.level.draw();
        this.player.draw();
        this.coins.forEach(coin => coin.draw());
        this.obstacles.forEach(obstacle => obstacle.draw());
    },

    gameOver() {
        if (this.DeathByObs) {
            alert("Perdiste OBSjajajaja")
            clearInterval(this.interval);
            location.reload()

            //location.href = "./onboard.html" ---> tercer html game over viejita


        }
        if (this.secs === -1) {
            alert("Perdiste jajajaja")

            clearInterval(this.interval);
            location.reload() // PREFERIBLEMENTE VOLVER A LA PANTALLA DE INICIO

        }
    },

    timer() {
        this.chrono = document.getElementById("chrono");
        this.chrono.innerHTML = this.secs.toString();
    },

    checkCollision() {
        // playerX, playerY === coinX
    },

    checkObsCollision(obstacle) {

        if (this.player.x < obstacle.obsX + obstacle.obsWidth
            && this.player.x + this.player.width > obstacle.obsX
            && this.player.y < obstacle.obsY + obstacle.obsHeight
            && this.player.y + this.player.height > obstacle.obsY
            && !obstacle.crash) {
            setTimeout(this.gameOver, 30); //APAÑO
            DeathByObs = true;
            obstacle.crash = true;
        }
    },

    checkCoinsCollision(coin) {

        if (this.player.x < coin.x + coin.width
            && this.player.x + this.player.width > coin.x
            && this.player.y < coin.y + coin.height
            && this.player.y + this.player.height > coin.y
            && !coin.crash) {
            const index = this.coins.indexOf(coin);
            this.coins.splice(index, 1);
            coin.crash = true;
        }
    },

    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 32:
                    Game.player.jump();
                    break;
            }
            Game.clockWise ? Game.clockWise = false : Game.clockWise = true
        })
    }

}




