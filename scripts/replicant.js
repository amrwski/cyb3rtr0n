class Replicant {
  constructor() {
    this.width = 70
    this.height = 160
    this.randPositionX = random(0 - this.width, WIDTH + this.width)
    this.randPositionY = random(0 - this.height, HEIGHT + this.height)
    this.sprite = new Sprite(animation, this.randPositionX, this.randPositionY, SPEED)
  }

  render() {
    this.sprite.x = this.randPositionX
    this.sprite.y = this.randPositionY
    this.sprite.scope = 0
    this.sprite.index += 0.2
    this.sprite.show()
    console.log(spawnInterval)
  }
}
// function spawnReplicant() {
//   replicants.push(new Replicant())
// }

// let spawnInterval = 3000

// setInterval(() => {
//   if (spawnInterval < 1000) {
//     spawnInterval = 1000
//   } else {
//     spawnInterval -= 300
//   }
// }, 5000)

// // repli spawn
// setInterval(() => {
//   spawnReplicant()
// }, spawnInterval)

let spawnInterval = 3000

function spawnReplicant() {
  if (spawnInterval <= 500) {
    spawnInterval = 500
  } else {
    spawnInterval -= 300
  }
  replicants.push(new Replicant())
  setTimeout(spawnReplicant, spawnInterval)
}
