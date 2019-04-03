let ghost
let replicants = []
let slugs = []
let hit = false

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

  // bullet collision
  replicants.forEach(function(replic) {
    const replicPosX = replic.randPositionX
    const replicPosY = replic.randPositionY
    const width = replic.width
    slugs.forEach(function(slug) {
      const slugPosX = slug.bullX
      const slugPosY = slug.bullY
      const radius = 5
      hit = collideCircleCircle(replicPosX, replicPosY, width, slugPosX, slugPosY, radius)
      print("colliding? " + hit)
    })
  })
}

setInterval(() => {
  spawnReplicant()
}, spawnInterval)
