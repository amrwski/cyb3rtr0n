let spawnInterval = 5000

class Replicant {
  constructor() {
    this.height = 50
    this.width = 50
    this.randPositionX = random(0 + this.width, WIDTH - this.width)
    this.randPositionY = random(0 + this.height, HEIGHT - this.height)
  }

  render() {
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
