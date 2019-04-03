class Bullet {
  constructor(mouseX, mouseY, bullX, bullY) {
    this.bullX = bullX
    this.bullY = bullY
    this.vel = createVector()
    this.pos = createVector(this.bullX, this.bullY)
    this.mouseX = mouseX
    this.mouseY = mouseY
    this.playerPosX = ghost.pos.x
    this.playerPosY = ghost.pos.y
    this.speedX = this.mouseX - this.playerPosX
    this.speedY = this.mouseY - this.playerPosY
  }
  draw() {
    push()
    image(bulletSprite, this.bullX, this.bullY, bulletSprite.width * 0.75, bulletSprite.height * 0.75)
    this.bullX += this.speedX * 0.1
    this.bullY += this.speedY * 0.1
    pop()

    // remove bullets
    slugs.forEach(function(bull) {
      if (bull.bullY < 0 || bull.bullY > 720) {
        slugs.shift(bull)
      }
    })
  }

  adjustSpeed() {
    while (Math.abs(this.speedX) < 300) {
      this.speedX *= 2
    }
    while (Math.abs(this.speedY) < 300) {
      this.speedY *= 2
    }
  }

  update() {
    this.pos.add(this.vel)
  }
}

function mouseClicked() {
  let newBullet = new Bullet(mouseX, mouseY, ghost.pos.x, ghost.pos.y)
  // newBullet.adjustSpeed()       ---messes with the direction of the bullet
  // console.log(newBullet.bullY)
  slugs.push(newBullet)
}
