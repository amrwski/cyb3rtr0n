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
  replicants.forEach(function(replic, replicIndex) {
    const replicPosX = replic.randPositionX
    const replicPosY = replic.randPositionY
    const width = replic.width
    const height = replic.height
    slugs.forEach(function(slug, slugIndex) {
      const slugPosX = slug.bullX
      const slugPosY = slug.bullY
      const radius = 5
      if (
        collideRectCircle(
          replicPosX,
          replicPosY,
          width * 0.25,
          height * 0.25,
          slugPosX,
          slugPosY,
          radius
        )
      ) {
        replicants.splice(replicIndex, 1) // remove replicant on hit
        slugs.splice(slugIndex, 1) // remove bullet on hit
      }
    })
  })
}

//repli spawn
setInterval(() => {
  spawnReplicant()
}, spawnInterval)
