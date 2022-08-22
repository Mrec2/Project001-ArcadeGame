class draw {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    img() {
        const img = new Image();
        img.src = './img/player.png'
        ctx.drawImage(img, this.x, this.y, this.width, this.height);
    }

    road() {
        ctx.strokeStyle = 'white';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    obstacles() {
        ctx.fillStyle = 'coral';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    coins(num) {
        /*         const arrCoins = [];
                for (let i = 0; i < num.length; i++) {
                    arrCoins += num[i]
                    console.log(arrCoins)
                } */

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
}