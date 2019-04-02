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
  this.fire()
  this.updateBullet
  this.printXY()

  text("X: " + mouseX, 0, HEIGHT / 4)
  text("Y: " + mouseY, 0, HEIGHT / 2)

  slugs.forEach(el => el.draw())
  slugs.forEach(el => el.update())
}

// for (let i = 0; i < slugs.length; i++) {
//   slugs[i].render()
//   slugs[i].update()
// }
