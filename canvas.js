let canvas = document.getElementById("display") //Create Canvas object
console.log(canvas)

canvas.width = document.body.clientWidth //set Canvas width to the width of the screen
canvas.height = document.body.clientHeight //set Canvas height to the height of the screen
canvas.height = document.body.clientHeight
let ctx = canvas.getContext("2d")
console.log(ctx)

ctx.fillStyle = "pink"
//ctx.fillRect(0,0,100,50) // x, y, width, height
ctx.fillRect(0,0,canvas.width,canvas.height)

ctx.fillStyle = "lightblue"
ctx.fillRect(-200,200,400,100) //talk about math coordinates and computer graphics coordinates


