window.addEventListener("keydown", event => {
	let colorIndex = Math.random()
	let color = "red"
	if (colorIndex < 0.5){
		color = "blue"
	}
	if (colorIndex > 0.6){
		color = "blue"
	}

	ctx.fillStyle = color

	let x = Math.random() * canvas.width
	let y = Math.random() * canvas.height

	let width = Math. random() * canvas.width
	let height = Math.random() * canvas.height

	new Shape(x,y,width,height).draw()
})


/*
Stretch Goals:
1. x & y should cover screen
	change 500 in line 10 to canswas.width and line 11 to canvas.height
2. support 3 random colors
3. random width and height

*/