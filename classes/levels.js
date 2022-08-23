class Levels {
    constructor(x, y, width, height, ctx) {
        this.levelX = x;
        this.levelY = y;
        this.levelWidth = width;
        this.levelHeight = height;
        this.ctx = ctx;
    }

    draw() {
        this.ctx.strokeStyle = 'black';
        this.ctx.strokeRect(this.levelX, this.levelY, this.levelWidth, this.levelHeight);
        /*         console.log("entra en draw metodo");
         */
    }
}
