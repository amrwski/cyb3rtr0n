class Ghost {
  constructor() {
    this.pos = createVector(WIDTH / 2, HEIGHT / 2)
    this.sprite = new Sprite(animation, this.pos.x, this.pos.y, SPEED)
    this.health = 200
  }

  render() {
    // health bar
    rect(510, 10, this.health, 20)
    fill(color(231, 0, 0))
    if (this.health <= 0) {
      remove()
      const gameOver = document.createElement("p")
      gameOver.innerHTML = "You ded, Punk"
      gameOver.classList.add("game-over")
      document.body.appendChild(gameOver)

      const scoreDisp = document.createElement("p")
      scoreDisp.innerHTML = `You scored a measly ${score} points`
      scoreDisp.classList.add("score-display")
      document.body.appendChild(scoreDisp)
    }

    // movement & anims
    this.sprite.x = this.pos.x
    this.sprite.y = this.pos.y
    this.sprite.show()

    if (keyIsDown(65)) {
      this.pos.x -= 3
      this.sprite.scope = 15
      this.sprite.index += 0.2
    }
    if (keyIsDown(68)) {
      this.pos.x += 3
      this.sprite.scope = 18
      this.sprite.index += 0.2
    }

    if (keyIsDown(87)) {
      this.pos.y -= 3
      this.sprite.scope = 21
      this.sprite.index += 0.1
    }

    if (keyIsDown(83)) {
      this.pos.y += 3
      this.sprite.scope = 12
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
