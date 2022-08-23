class Coin {
    constructor(img, ctx, x, y, width, height) {
        this.y = y;
        this.x = x;
        this.width = width;
        this.height = height;
        this.ctx = ctx
        this.image = new Image()
        this.image.src = img


        this.coins = [];
    }

    draw() {
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }





}
