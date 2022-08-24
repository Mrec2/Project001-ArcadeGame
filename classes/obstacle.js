class Obstacles {
    constructor(x, y, width, height, ctx) {
        this.obsX = x;
        this.obsY = y;
        this.obsWidth = width;
        this.obsHeight = height;
        this.ctx = ctx;
        this.crash = false;
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.obsX, this.obsY, this.obsWidth, this.obsHeight);
    }
}



