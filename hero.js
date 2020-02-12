let heroSprite = new Sprite("jumpman.png")

class Hero {
	constructor(){ // how you intialize everything
		this.x = 100
		this.y = 100
		this.width = 100
		this.height = 100
	}
	moveUp(){ // helper function
		this.y = this.y - 10
	}
	moveDown(){ // helper function
		this.y = this.y + 10
	}
	moveLeft(){ // helper function
		this.x = this.x - 10
	}
	moveRight(){ // helper function
		this.x = this.x + 10
	}

	draw(){
		CTX.fillStyle = "black"
		CTX.beginPath()
		CTX.arc(
			this.x,
			this.y,
			this.width, //radius
			0, //begin point
			2* Math.PI,// endpoint
			)
		CTX.fill()

		heroSprite.draw(this.x, this.y, this.width, this.height)
	}
}