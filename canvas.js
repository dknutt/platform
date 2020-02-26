// set the canvas "resolution" to match the screen
let CANVAS = document.getElementById("display") //Create Canvas object
console.log()// print to console
CANVAS.width = document.body.clientWidth //set Canvas width to the width of the screen
CANVAS.height = document.body.clientHeight //set Canvas height to the height of the screen

//create 2D context object for drawing on the canvas
let CTX = CANVAS.getContext("2d")

console.log(CTX)// print to console

function ERASE(){
	//draw a smaller rectangle "on top"
	CTX.fillStyle = "pink"
	//CTX.fillRect(0,0,100,50) // x, y, width, height
	CTX.fillRect(0,0,CANVAS.width,CANVAS.height)
}

CTX.fillStyle = "lightblue"
CTX.fillRect(-200,200,400,100) //talk about math coordinates and computer graphics coordinates


let GRIDSIZE = CANVAS.height/12