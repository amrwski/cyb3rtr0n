let ghost
let replicants = []
let slugs = []
let hit = false
let splats = []
let splatsArr = []

function setup() {
  mapFloor = loadImage("../assets/background/carbon-floor.png")
  bulletSprite = loadImage("../assets/bullets/bullet1.png")
  ghostSprite = loadImage("../assets/cutouts/ghost/front1.png")
  replicantSprite = loadImage("../assets/cutouts/replicant/0-front1.png")
  splatsArr = [
    (bloodSplat1 = loadImage("../assets/splats/bloodsplats_0001.png")),
    (bloodSplat2 = loadImage("../assets/splats/bloodsplats_0002.png")),
    (bloodSplat3 = loadImage("../assets/splats/bloodsplats_0003.png")),
    (bloodSplat4 = loadImage("../assets/splats/bloodsplats_0004.png")),
    (bloodSplat5 = loadImage("../assets/splats/bloodsplats_0005.png")),
    (bloodSplat6 = loadImage("../assets/splats/bloodsplats_0006.png")),
    (bloodSplat7 = loadImage("../assets/splats/bloodsplats_0007.png"))
  ]
  randSplat = random(splatsArr)
  createCanvas(WIDTH, HEIGHT)
  ghost = new Ghost()
}

function draw() {
  background(mapFloor)
  splats.forEach(splat => {
    image(
      splat.randSplat,
      splat.replicPosX,
      splat.replicPosY,
      splat.randSplat.width * 0.25,
      splat.randSplat.height * 0.25
    )
  })
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
        splats.push({
          randSplat,
          replicPosX,
          replicPosY
        })

        replicants.splice(replicIndex, 1) // remove replicant on hit
        slugs.splice(slugIndex, 1) // remove bullet on hit
        randSplat = random(splatsArr)
      }
    })
  })

  // calculate difference vector
  diffArr = []
  replicants.forEach(function(replic) {
    let dx = ghost.pos.x - replic.randPositionX
    let dy = ghost.pos.y - replic.randPositionY
    diffArr.push(dx, dy)
  })

  // normalize (direction vector with length of 1)
  let distToGhost = Math.sqrt(diffArr[0] * diffArr[0] + diffArr[1] * diffArr[1])
  if (distToGhost) {
    diffArr[0] /= distToGhost // dx
    diffArr[1] /= distToGhost //dy
  }

  // move
  // SPEED = speed (units/sec)
  // delta = elapsed time (sec) ???
  replicants.forEach(function(replic) {
    replic.randPositionX += diffArr[0] * SPEED
    replic.randPositionY += diffArr[1] * SPEED
  })
}

//replicant spawn
setInterval(() => {
  spawnReplicant()
}, spawnInterval)
