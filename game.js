
let hero = new Hero() //instantiate and store new Hero in hero variable
let shapes = []
ERASE()
hero.draw()

window.addEventListener("keydown", event => {
	console.log (event.code)
	if (event.code === "KeyS"){
		let colorIndex = Math.random()
		let color = "red"
		if (colorIndex < 0.5){
			color = "blue"
		}
		if (colorIndex > 0.6){
			color = "orange"
		}

		CTX.fillStyle = color

		let x = Math.random() * CANVAS.width
		let y = Math.random() * CANVAS.height

		let width = Math. random() * CANVAS.width
		let height = Math.random() * CANVAS.height

		let s = new Shape(x,y,width,height)
		shapes.push(s)
	}
	if (event.code === "ArrowRight"){
		hero.moveRight()
	}
	ERASE()

	//console.log (shapes)
	shapes.forEach(s => s.draw())

	hero.draw()
})



/*
Stretch Goals:
1. x & y should cover screen
	change 500 in line 10 to canswas.width and line 11 to canvas.height
2. support 3 random colors
3. random width and height

*/