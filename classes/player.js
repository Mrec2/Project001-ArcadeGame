class Player {
    constructor(img, ctx) {
        this.ctx = ctx

        this.y = 25
        this.x = 25

        this.velocityX = 10
        this.velocityY = 10

        this.image = new Image()
        this.image.src = img
        this.isMoving = "normal"
        this.width = 40
        this.height = 40
        this.boostX = 20
        this.boostY = 20

    }

    draw() {
        // this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

    }

    playerMovement() {
        // SWITCH 
        if (this.isMoving === 'topToBottom') {
            this.y += this.boostY;
        }
        else if (this.isMoving === 'bottomToTop') {
            this.y -= this.boostY;
        }
        else if (this.isMoving === 'leftToRight') {
            this.x += this.boostX;
        }
        else if (this.isMoving === 'rightToLeft') {
            this.x -= this.boostX;
        }
        else if (this.isMoving === 'normal') {
            if (this.y === 25) {
                this.x += this.velocityX;
            }
            if (this.x === 725) {
                this.x === 725;
                this.y += this.velocityY
            }
            if (this.y === 425) {
                this.y === 425;
                this.x -= this.velocityX
            }
            if (this.x === 25) {
                this.x === 25;
                this.y -= this.velocityY
            }

        }
        if (this.y === 425 || this.y === 25 || this.x === 25 || this.x === 725) {
            this.isMoving = 'normal'
        }
    }

    playerMovementReverse() {
        // switch
        if (this.isMoving === 'topToBottom') {
            this.y += this.boostY
        }
        if (this.isMoving === 'bottomToTop') {
            this.y -= this.boostY;
        }
        if (this.isMoving === 'leftToRight') {
            this.x += this.boostX;
        }
        if (this.isMoving === 'rightToLeft') {
            this.x -= this.boostX;
        }
        if (this.isMoving === 'normal') {
            if (this.x === 25) {
                this.y += this.velocityY
            }
            if (this.y === 425) {
                this.y === 425;
                this.x += this.velocityX
            }
            if (this.x === 725) {
                this.x === 725;
                this.y -= this.velocityY
            }
            if (this.y === 25) {
                this.y === 425;
                this.x -= this.velocityX;
            }

        }
        if (this.y === 425 || this.y === 25 || this.x === 25 || this.x === 725) {
            this.isMoving = 'normal'
        }
    }

    jump() {
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