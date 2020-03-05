let heroSprite = new Sprite("jumpman.png")
let heroStand = new Sprite("images/alienPink_stand.png")
let heroJump = new Sprite("images/alienPink_jump.png")

class Hero {
	constructor(){ // how you intialize everything
		this.x = GRIDSIZE
		this.y = GRIDSIZE
		this.width = GRIDSIZE
		this.height = GRIDSIZE * 2
		this.dy = 0 //delta y or how much the velocity should change
		this.airborne = true
	}
	jump() {
		if (this.airborne){
			return
		}
		this.dy = - GRIDSIZE/2
		this.airborne = true
	}
	moveLeft(){ // helper function
		this.x = this.x - GRIDSIZE/10
	}
	moveRight(){ // helper function
		this.x = this.x + GRIDSIZE/10
	}


	step(platforms){
		this.dy = this.dy + GRIDSIZE/60
		if (this.dy > GRIDSIZE) {
			this.dy = GRIDSIZE - 1
		}

		// apply speed to position
		this.y = this.y + this.dy

		//check if we are inside any platforms
		platforms.forEach(p =>{
			let isInsideY = this.y > p.y && this.y < p.y + p.height
			let isInsideX = this.x > p.x && this.x < p.x + p.width
			if (isInsideX && isInsideY){
				this.y = p.y
				this.dy = 0
				this.airborne = false
			}
		})
		

		// check if hero is in the ground
		if(this.y>CANVAS.height){
			this.y = CANVAS.height
			this.dy = 0
			this.airborne = false
		}
	}


	draw(){
		let imageToDraw = heroStand
		if (this.airborne){
			imageToDraw = heroJump
		}
		imageToDraw.draw(
			this.x - this.width/2,
			this.y - this.height,
			this.width,
			this.height)
	}
}