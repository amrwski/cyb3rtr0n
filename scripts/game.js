let ghost
let replicants = []
let slugs = []
let hit = false

function setup() {
  mapFloor = loadImage("../assets/background/carbon-floor.png")
  bulletSprite = loadImage("../assets/bullets/bullet1.png")
  ghostSprite = loadImage("../assets/cutouts/ghost/front1.png")
  replicantSprite = loadImage("../assets/cutouts/replicant/0-front1.png")
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
      print("hit? " + hit)
    })
  })
}

setInterval(() => {
  spawnReplicant()
}, spawnInterval)

slugs.forEach(function(bull) {
  if (bull.bullY < 0 || bull.bullY > 720) {
    slugs.shift(bull)
  }
})

// remove on hit
// if (hit === true) {

// }
