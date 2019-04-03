let ghost
let replicants = []
let slugs = []

function setup() {
  mapFloor = loadImage("../assets/background/carbon-floor.png")
  createCanvas(WIDTH, HEIGHT)
  ghost = new Ghost()
}

function draw() {
  background(mapFloor)
  frameRate(60)
  ghost.render()
  slugs.forEach(el => el.draw())
  slugs.forEach(el => el.update())
  replicants.forEach(rep => rep.render())
}

setInterval(() => {
  spawnReplicant()
}, spawnInterval)
