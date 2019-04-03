let spawnInterval = 5000

class Replicant {
  constructor() {
    this.height = 50
    this.width = 50
    this.randPositionX = random(0 + this.width, WIDTH - this.width)
    this.randPositionY = random(0 + this.height, HEIGHT - this.height)
  }

  render() {
    fill(255, 69, 0)
    ellipse(this.randPositionX, this.randPositionY, this.width, this.height)
  }
}

function spawnReplicant() {
  replicants.push(new Replicant())
}
