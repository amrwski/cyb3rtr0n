class Replicant {
  constructor() {
    this.width = 70
    this.height = 160
    this.randPositionX = random(0 - this.width, WIDTH + this.width)
    this.randPositionY = random(0 - this.height, HEIGHT + this.height)
  }

  render1() {
    image(
      replicantSprite,
      this.randPositionX,
      this.randPositionY,
      replicantSprite.width * 0.25,
      replicantSprite.height * 0.25
    )
  }
}

function spawnReplicant() {
  replicants.push(new Replicant())
}
