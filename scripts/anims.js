class Sprite {
  constructor(animation, x, y, SPEED) {
    this.x = x
    this.y = y
    this.animation = animation
    this.w = this.animation[0].width
    this.len = this.animation.length
    this.speed = SPEED / 5
    this.index = 0
    this.scope = 0
  }

  show() {
    let index = (floor(this.index) % 3) + this.scope
    image(this.animation[index], this.x, this.y)
    // this.index += this.speed
  }

  animate() {
    this.index += this.speed
    this.x += this.speed * 15

    if (this.x > width) {
      this.x = -this.w
    }
  }
}
