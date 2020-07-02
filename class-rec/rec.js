var canvas = document.querySelector("#canvas")
canvas.width = 800
canvas.height = 600
canvas.style.border = '1px solid black'
    //canvas.style.borderRadius = '50%' hình tròn
var ctx = canvas.getContext('2d')
console.log(ctx)
//hình chữ nhật
class Rect {
    constructor(dx, dy, width, height, color){
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.color = color
    }
    draw(){
        ctx.fillStyle = this.color
        ctx.rect(this.dx, this.dy, this.width, this.height)
        ctx.fill()
    }
}
ctx.beginPath()
var rect = new Rect(0, 0, 100, 200, '#2ecc71')
rect.draw()

ctx.beginPath()
var rect = new Rect(0, 500, 100, 100, '#e67e22')
rect.draw()

ctx.beginPath()
var rect = new Rect(700, 550, 100, 150, '#3c40c6')
rect.draw()

ctx.beginPath()
var rect = new Rect(500, 0, 300, 400, '#0fbcf9')
rect.draw()