let ghost
let replicants = []
let slugs = []

function setup() {
  createCanvas(WIDTH, HEIGHT)
  ghost = new Ghost()
}

function draw() {
  background(0)
  frameRate(60)
  ghost.render()
  this.shooting()

  text("X: " + mouseX, 0, HEIGHT / 4)
  text("Y: " + mouseY, 0, HEIGHT / 2)
}
