class Ghost {
  constructor() {
    this.pos = createVector(WIDTH / 2, HEIGHT / 2)
    this.sprite = new Sprite(animation, this.pos.x, this.pos.y, SPEED)
  }
  render() {
    // image(ghostSprite, this.pos.x, this.pos.y, ghostSprite.width * 0.25, ghostSprite.height * 0.25)
    // new Sprite(animation, this.pos.x, this.pos.y, SPEED)
    // movement
    // this.sprite = new Sprite(animation, this.pos.x, this.pos.y, SPEED)
    this.sprite.x = this.pos.x
    this.sprite.y = this.pos.y
    this.sprite.show()
    // this.sprite.animate()

    if (keyIsDown(65)) {
      this.pos.x -= 3
      this.sprite.scope = 4
      this.sprite.index += 0.1
    }
    if (keyIsDown(68)) {
      this.pos.x += 3
    }

    if (keyIsDown(87)) {
      this.pos.y -= 3
    }

    if (keyIsDown(83)) {
      this.pos.y += 3
      this.sprite.index += 0.1
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
