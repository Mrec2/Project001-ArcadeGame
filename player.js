class player {
    constructor() {
        this.y = 25;
        this.x = 25;
        moveX = 10;
        moveY = 10;
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