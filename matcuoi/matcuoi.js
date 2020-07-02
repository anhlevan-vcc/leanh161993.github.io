var canvas = document.querySelector("#canvas")
canvas.width = 300
canvas.height = 300
canvas.style.border = '1px solid black'
//canvas.style.borderRadius = '50%' hình tròn
var ctx = canvas.getContext('2d')
console.log(ctx)


//hình tròn
class Circle {
    constructor(dx, dy, radius, startAngle, endAngle, counterClockwise, color){
        this.dx = dx
        this.dy = dy
        this.radius = radius
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.counterClockwise = counterClockwise
        this.color = color
    }
    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.color1
        ctx.strokeStyle = this.color
        ctx.arc(this.dx, this.dy, this.radius, this.startAngle, this.endAngle, this.counterClockwise)
        ctx.stroke()
    }
}
var circle = new Circle(150, 150, 100, 0, 2 * Math.PI, false, 'red')
circle.draw()

var circle = new Circle(120, 120, 10, 0, 2 * Math.PI, false, 'red')
circle.draw()

var circle = new Circle(180, 120, 10, 0, 2 * Math.PI, false, 'red')
circle.draw()

var circle = new Circle(150, 150, 50, 0, Math.PI, false, 'red')
circle.draw()