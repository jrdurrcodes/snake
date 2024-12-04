class Game {

    constructor() {
        //colors
        this.boardBorder = '#000'
        this.boardBg = '#cfb87c'
        this.snakeColor = '#d36135'
        this.snakeBorder ='#000'
    


        // snake body
        this.snake = [
            {x: 200, y: 200}, // head
            {x: 190, y: 200}, 
            {x: 180, y: 200}, 
            {x: 170, y: 200}, 
            {x: 160, y: 200}
        ]

        this.snakeBoard = document.getElementById('snakeBoard')
        this.snakeBoardCtx = this.snakeBoard.getContext('2d')

        this.dx = 10
        this.dy = 0
    }

    init() {
        //make a timer
        /** setTimer(callback funtion, time in ms) */
        setTimeout(()=> {
        console.log('counting')
        this.makeCanvas()
        this.drawSnake()

        this.moveSnake()

        // call init(); recursion
        this.init()

        }, 3000)  
    }

    //1 make canvas
    makeCanvas() {
        const snakeBoard = this.snakeBoard
        const snakeBoardCtx = this.snakeBoardCtx

        snakeBoardCtx.fillStyle = this.boardBg
        snakeBoardCtx.strokeStyle = this.boardBorder

        snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
        snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
    }

    //2 draw snake
    drawSnake() {

        const snake = this.snake
        const snakeBoardCtx = this.snakeBoardCtx

        snake.forEach(snakePart => {
            snakeBoardCtx.fillStyle = this.snakeColor
            snakeBoardCtx.strokeStyle = this.snakeBorder

            snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10)
            snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10)
        })
    }

    // 3 move the snake
    moveSnake() {
        const snake = this.snake
        const head = {
            x: snake[0].x + this.dx,
            y: snake[0].y + this.dy
        }
        
        snake.unshift(head)
        
        snake.pop()


    }
}


const snake = new Game()

snake.init()


