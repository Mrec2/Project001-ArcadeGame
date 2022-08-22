class drawAll {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    drawRectangle(x, y, width, height) {
        Game.ctx.strokeStyle = 'white';
        Game.ctx.strokeRect(x, y, width, height);
    }

    drawImage(x, y, width, height) {
        const imgPlayer = new Image();
        img.src = './img/player.png'
        Game.ctx.drawImage(imgPlayer, x, y, width, height);
    }
}