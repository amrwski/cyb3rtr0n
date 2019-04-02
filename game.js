let ghost
let replicants = []
let slugs = []

function setup() {
  createCanvas(WIDTH, HEIGHT)
  ghost = new Ghost()
}

function draw() {
  background(0)
  frameRate(60)
  ghost.render()
  slugs.forEach(el => el.draw())
  slugs.forEach(el => el.update())

  replicants.forEach(el => el.render())
  setInterval(spawnReplicant, spawnInterval)
}
