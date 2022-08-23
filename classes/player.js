class Player {
    constructor(img, ctx) {
        this.y = 25;
        this.x = 25;
        this.moveX = 10;
        this.moveY = 10;

        this.ctx = ctx
        this.image = new Image();
        this.image.src = img;
        this.isMoving = "normal";
        this.moveX = 10;
        this.moveY = 10;
        this.boostMoveX = 20;
        this.boostMoveY = 20;

    }

    draw() {
        /*         console.log('DESDE PLAYER DRAW')
                console.log(this.image.src) */
        this.ctx.drawImage(this.image, this.x, this.y, Game.playerWidth, Game.playerHeight);
    }

    playerMovement() {

        if (this.isMoving === 'topToBottom') {
            this.y += this.boostMoveY;
        }
        if (this.isMoving === 'bottomToTop') {
            this.y -= this.boostMoveY;
        }
        if (this.isMoving === 'leftToRight') {
            this.x += this.boostMoveX;
        }
        if (this.isMoving === 'rightToLeft') {
            this.x -= this.boostMoveX;
        }
        if (this.isMoving === 'normal') {
            if (this.y === 25) {
                this.x += this.moveX;
            }
            if (this.x === 725) {
                this.x === 725;
                this.y += this.moveY
            }
            if (this.y === 425) {
                this.y === 425;
                this.x -= this.moveX
            }
            if (this.x === 25) {
                this.x === 25;
                this.y -= this.moveY
            }

        }
        if (this.y === 425 || this.y === 25 || this.x === 25 || this.x === 725) {
            this.isMoving = 'normal'
        }
    }

    playerMovementReverse() {

        console.log("entra en movement reverse");
        if (this.isMoving === 'topToBottom') {
            this.y += this.boostMoveY
        }
        if (this.isMoving === 'bottomToTop') {
            this.y -= this.boostMoveY;
        }
        if (this.isMoving === 'leftToRight') {
            this.x += this.boostMoveX;
        }
        if (this.isMoving === 'rightToLeft') {
            this.x -= this.boostMoveX;
        }
        if (this.isMoving === 'normal') {
            if (this.x === 25) {
                this.y += this.moveY
            }
            if (this.y === 425) {
                this.y === 425;
                this.x += this.moveX
            }
            if (this.x === 725) {
                this.x === 725;
                this.y -= this.moveY
            }
            if (this.y === 25) {
                this.y === 425;
                this.x -= this.moveX;
            }

        }
        if (this.y === 425 || this.y === 25 || this.x === 25 || this.x === 725) {
            this.isMoving = 'normal'
        }
    }

    jump() {
        console.log('jumping')
        if (this.y === 25) {
            this.isMoving = 'topToBottom'
        } else if (this.y === 425) {
            this.isMoving = 'bottomToTop'
        } else if (this.x === 25) {
            this.isMoving = 'leftToRight'
        } else if (this.x === 725) {
            this.isMoving = 'rightToLeft'
        }

    }
}