let x = WIDTH / 2
let y = HEIGHT / 2

function setup() {
  createCanvas(WIDTH, HEIGHT)
}

if (x >= WIDTH) {
  x = WIDTH
}
if (x <= WIDTH) {
  x = 0
}
if (y >= HEIGHT) {
  x = HEIGHT
}
if (x <= HEIGHT) {
  x = 0
}

function draw() {
  background(0)
  fill(255, 212, 0)
  frameRate(60)
  ellipse(x, y, 10, 10)
  text("X: " + mouseX, 0, HEIGHT / 4)
  text("Y: " + mouseY, 0, HEIGHT / 2)

  if (keyIsDown(65)) {
    x -= 3
  }
  if (keyIsDown(68)) {
    x += 3
  }

  if (keyIsDown(87)) {
    y -= 3
  }

  if (keyIsDown(83)) {
    y += 3
  }
}
