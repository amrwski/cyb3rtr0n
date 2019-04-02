let spawnInterval = 5000

class Replicant {
  constructor(randPositionX, randPositionY) {
    this.randPositionX = Math.floor(Math.random() * (WIDTH - this.width))
    this.randPositionY = Math.floor(Math.random() * (HEIGHT - this.height))
    this.pos = createVector(randPositionX, randPositionY)
  }

  render() {
    fill(255, 69, 0)
    ellipse(this.pos.x, this.pos.y, 10, 10)
  }
}

function spawnReplicant() {
  replicants.push(new Replicant(this.randPositionX, this.randPositionY))
}
