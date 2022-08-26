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
    live: 3,
    liveHTML: undefined,

    obstacles: [],
    DeathByObs: false,

    level: undefined,

    coins: [],
    coinImg: 'img/coin.png',

    soundObs: undefined,
    soundCoins: undefined,
    soundJump: undefined,

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
        clearInterval(this.interval);
        this.interval = setInterval(() => {

            this.counter++;
            this.lives();
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
            this.gameWin();
            // this.checkObsCollision(this.obstacles);
            //this.checkCollision();
        }, 1000 / this.fps);
    },

    createAll() {
        this.level = new Levels(50, 50, 700, 400, this.ctx);
        this.player = new Player(this.playerImg, this.ctx);
        this.createInitialCoins();
        this.createObstacles();
        this.soundObs = new Audio("./sounds/lose.mp3");
        this.soundCoins = new Audio("./sounds/bite-coin.mp3");
        this.soundJump = new Audio("./sounds/jump.mp3");

    },

    createObstacles() {
        this.obstacles.push(new Obstacles(100, 250, 200, 2, this.ctx));
        this.obstacles.push(new Obstacles(500, 250, 200, 2, this.ctx));
        this.obstacles.push(new Obstacles(400, 100, 2, 100, this.ctx));
        this.obstacles.push(new Obstacles(400, 300, 2, 100, this.ctx));
    },

    createInitialCoins() {
        this.coins.push(new Coin(this.coinImg, this.ctx, 75, 75, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 310, 350, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 350, 180, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 390, 220, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 390, 260, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 705, 75, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 75, 405, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 430, 350, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 470, 120, 20, 20));
        this.coins.push(new Coin(this.coinImg, this.ctx, 705, 405, 20, 20));
    },

    drawAll() {
        this.level.draw();
        this.player.draw();
        this.coins.forEach(coin => coin.draw());
        this.obstacles.forEach(obstacle => obstacle.draw());
    },

    gameOver() {
        if (this.live === 0) location.href = "./gameover.html";
        if (this.secs === -1) {
            location.href = "./gameover.html";
        }
    },
    gameWin() {
        if (this.coins.length === 0) location.href = "./youwin.html";
    },

    timer() {
        this.chrono = document.getElementById("chrono");
        this.chrono.innerHTML = this.secs.toString();
    },

    lives() {
        this.liveHTML = document.getElementById("live");
        this.liveHTML.innerHTML = "Lives: " + this.live.toString();
    },

    checkObsCollision(obstacle) {

        if (this.player.x < obstacle.obsX + obstacle.obsWidth
            && this.player.x + this.player.width > obstacle.obsX
            && this.player.y < obstacle.obsY + obstacle.obsHeight
            && this.player.y + this.player.height > obstacle.obsY
            && !obstacle.crash) {
            DeathByObs = true;
            obstacle.crash = true;
            this.live--;
            this.soundObs.play();
            this.init();

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
            this.soundCoins.play();
            coin.crash = true;
        }
    },

    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 32:
                    Game.player.jump();
                    this.soundJump.play();
                    break;
            }
            Game.clockWise ? Game.clockWise = false : Game.clockWise = true
        })
    },
}




