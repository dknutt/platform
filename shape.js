
//created this new file in our platformer folder 
//and added the commented code below

//CTX.fillStyle = "green"
//CTX.fillRect(500,500,500,500)


class Shape {
	constructor(x,y,width,height){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
	}

	//helper functions
	draw(){ 
		CTX.fillStyle = "green"
		CTX.fillRect(
			this.x,
			this.y,
			this.width,
			this.height
			)
	}
}
/*
CTX.fillStyle = "yellow"
//let shape = new Shape()
//shape.draw()



new Shape(200,400,200,200).draw()
new Shape(100,100,200,200).draw()
new Shape(400,500,900,200).draw()
new Shape(90,300,200,100).draw()
*/
