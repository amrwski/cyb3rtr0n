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
    stroke(255)
    strokeWeight(0.5)
    fill(200, 0, 200)
    ellipse(this.bullX, this.bullY, 5)
    this.bullX += this.speedX * 0.1
    this.bullY += this.speedY * 0.1
    pop()
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
  newBullet.adjustSpeed()

  slugs.push(newBullet)
  //   console.log(slugs.length)
  //   // console.log(slugs[0].bullY)
  //   if (slugs[0].bullY < 0 || slugs[0].bullY > 800) {
  //     slugs[0].shift()
  //   }
}
