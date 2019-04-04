class Sprite {
  constructor(animation, x, y, SPEED) {
    this.x = x
    this.y = y
    this.animation = animation
    this.w = this.animation[0].width
    this.len = this.animation.length
    this.speed = SPEED
    this.index = 0
    this.scope = 0
  }

  show() {
    let index = (floor(this.index) % 3) + this.scope
    image(
      this.animation[index],
      this.x,
      this.y,
      this.animation[index].width * 0.6,
      this.animation[index].height * 0.6
    )
  }
}
