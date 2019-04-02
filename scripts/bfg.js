class Bullet {
  constructor(mouseX, mouseY, ghostX, ghostY) {
    this.ghostX = ghostX
    this.ghostY = ghostY
    this.vel = createVector()
    this.pos = createVector(this.ghostX, this.ghostY)
    this.mouseX = mouseX
    this.mouseY = mouseY
  }
  draw() {
    push()
    stroke(255)
    strokeWeight(0.5)
    fill(200, 0, 200)
    ellipse(this.ghostX, this.ghostY, 5)
    this.ghostX += (this.mouseX - ghost.pos.x) * 0.1
    this.ghostY += (this.mouseY - ghost.pos.y) * 0.1
    pop()
  }
  update() {
    this.pos.add(this.vel)
  }
}

function mouseClicked() {
  slugs.push(new Bullet(this.mouseX, this.mouseY, ghost.pos.x, ghost.pos.y))
  // console.log(slugs[0].ghostY)
  // if (slugs[0].ghostY < 0) {
  //   slugs[0].shift()
  // }
  // if (slugs[0].ghostY > 800) {
  //   slugs[0].shift()
  // }
}
