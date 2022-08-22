class player {
    constructor() {
        this.y = 25;
        this.x = 25;
        this.moveX = 10;
        this.moveY = 10;
    }

    draw(x, y, playerWidth, playerHeight) {
        const img = new Image();
        img.src = './img/player.png'
        Game.ctx.drawImage(img, this.x, this.y, Game.playerWidth, Game.playerHeight);
    }

    playerMovement() {
        if (isMoving === 'topToBottom') {
            y += moveY;
        }
        if (isMoving === 'bottomToTop') {
            y -= moveY;
        }
        if (isMoving === 'leftToRight') {
            x += moveX;
        }
        if (isMoving === 'rightToLeft') {
            x -= moveX;
        }
        if (isMoving === 'normal') {
            if (y === 25) {
                x += moveX;
            }
            if (x === 725) {
                x === 725;
                y += moveY
            }
            if (y === 425) {
                y === 425;
                x -= moveX
            }
            if (x === 25) {
                x === 25;
                y -= moveY
            }

        }
    }

    jump() {
        if (y === 25) {
            isMoving = 'topToBottom'
        } else if (y === 425) {
            isMoving = 'bottomToTop'
        } else if (x === 25) {
            isMoving = 'leftToRight'
        } else if (x === 725) {
            isMoving = 'rightToLeft'
        }
    }
}