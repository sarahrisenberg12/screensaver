let x_position = 0 
let x_direction = "right"
let speed = 30
let diameter = 30
let y_position = 0
let y_direction = "down"
let angle = 0 

function setup() {

createCanvas(400, 300)
x_position = random(0, width)
y_position = random(0, height)
rect(0, 0, width, height)
// angleMode(DEGREES)

}

function draw (){

	// background(255, 255, 255)

	strokeWeight(1)

push()
translate(x_position, y_position)

rect(0, 0, diameter, diameter)
ellipse(0, 0, diameter, diameter)
ellipse(0, 0, diameter/2, diameter/2)
// ellipse(0, 0, diameter/3, diameter/3)
// ellipse(0, 0, diameter/4, diameter/4)
// ellipse(0, 0, diameter/5, diameter/5)
// arc(x_position, y_direction, diameter/2, diameter/2, angle, angle + 5 , PIE)
// angle = 1



if (x_direction == "right") {
	x_position = x_position + speed
}

if (y_direction == "down") {
	y_position = y_position + speed
}

if (y_direction == "up") {
	y_position = y_position - speed
}

if (x_direction == "left") {
	x_position = x_position - speed
}



// right wall
if (x_position >= 400 - diameter/2) {
	x_direction = "left" 
	fill(random(0, 255), random(0, 255), random(0, 255))
}

// left wall
if (x_position <= 0 + diameter/2) {
	x_direction = "right"
	fill(random(0, 255), random(0, 255), random(0, 255))
}

// // bottom wall
	if (y_position >= height - diameter/2) {
 	y_direction = "up"
	fill(random(0, 255), random(0, 255), random(0, 255))
 }
// //top wall 
 	if (y_position <= 0 + diameter/2) {
	y_direction = "down"
	fill(random(0, 255), random(0, 255), random(0, 255))
}


push()
noFill()
rect(0, 0, width, height)
strokeWeight(1)
strokeWeight(0)
pop()
}


