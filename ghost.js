function Ghost() {
  this.pos = createVector(WIDTH / 2, HEIGHT / 2)
  this.render = function() {
    fill(255, 212, 0)
    ellipse(this.pos.x, this.pos.y, 10, 10)

    // movement
    if (keyIsDown(65)) {
      this.pos.x -= 3
    }
    if (keyIsDown(68)) {
      this.pos.x += 3
    }

    if (keyIsDown(87)) {
      this.pos.y -= 3
    }

    if (keyIsDown(83)) {
      this.pos.y += 3
    }

    // map limits
    if (this.pos.x >= WIDTH) {
      this.pos.x = WIDTH
    }
    if (this.pos.x <= 0) {
      this.pos.x = 0
    }
    if (this.pos.y >= HEIGHT) {
      this.pos.y = HEIGHT
    }
    if (this.pos.y <= 0) {
      this.pos.y = 0
    }
  }
}
