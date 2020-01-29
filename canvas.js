// set the canvas "resolution" to match the screen
let canvas = document.getElementById("display") //Create Canvas object
console.log(canvas)// print to console
canvas.width = document.body.clientWidth //set Canvas width to the width of the screen
canvas.height = document.body.clientHeight //set Canvas height to the height of the screen

//create 2D context object for drawing on the canvas
let ctx = canvas.getContext("2d")

console.log(ctx)// print to console

//dewa a smaller rectangle "on top"
ctx.fillStyle = "pink"
//ctx.fillRect(0,0,100,50) // x, y, width, height
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle = "lightblue"
ctx.fillRect(-200,200,400,100) //talk about math coordinates and computer graphics coordinates


