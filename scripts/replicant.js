let spawnInterval = 5000

class Replicant {
  constructor() {
    this.width = 70
    this.height = 160
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

// // calculate difference vector
// positionDiff = replicants.forEach(function(replic) {
//   let dx = ghost.pos.x - replic.randPositionX
//   let dy = ghostpos.y - replic.randPositionY
//   return dx, dy
// })

// // normalize (direction vector with length of 1)
// let distToGhost = Math.sqrt(dx * dx + dy * dy)
// if (distToGhost) {
//   dx /= distToGhost
//   dy /= distToGhost
// }

// // move
// // delta = elapsed time (sec)
// // SPEED = speed (units/sec)
// replicMove = replicants.forEach(function(replic) {
//   replic.randPositionX += dx * SPEED
//   replic.randPositionY += dy * SPEED
// })
