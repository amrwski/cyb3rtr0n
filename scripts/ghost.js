class Ghost {
  constructor() {
    this.pos = createVector(WIDTH / 2, HEIGHT / 2)
  }
  render() {
    image(ghostSprite, this.pos.x, this.pos.y, ghostSprite.width * 0.25, ghostSprite.height * 0.25)

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
    if (this.pos.x >= WIDTH - ghostSprite.width * 0.25) {
      this.pos.x = WIDTH - ghostSprite.width * 0.25
    }
    if (this.pos.x <= 0) {
      this.pos.x = 0
    }
    if (this.pos.y >= HEIGHT - ghostSprite.height * 0.25) {
      this.pos.y = HEIGHT - ghostSprite.height * 0.25
    }
    if (this.pos.y <= 0) {
      this.pos.y = 0
    }
  }
}
