let x = WIDTH / 2
let y = HEIGHT / 2

function Ghost() {
  this.pos = createVector(WIDTH / 2, HEIGHT / 2)
  this.render = function() {
    fill(255, 212, 0)
    ellipse(x, y, 10, 10)

    // movement
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

    // map limits
    if (x >= WIDTH) {
      x = WIDTH
    }
    if (x <= 0) {
      x = 0
    }
    if (y >= HEIGHT) {
      y = HEIGHT
    }
    if (y <= 0) {
      y = 0
    }
  }
}
