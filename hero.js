class Hero {
	constructor(){ // how you intialize everything
		this.x = 100
		this.y = 100
		this.width = 100
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
	}
}