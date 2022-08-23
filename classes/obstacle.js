class Obstacles {
    constructor(startX, startY, endX, endY, ctx) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.strokeStyle = 'red';
        this.ctx.beginPath();
        this.ctx.moveTo(this.startX, this.startY);
        this.ctx.lineTo(this.endX, this.endY);
        this.ctx.lineWidth = 4;
        this.ctx.stroke();
    }
}



