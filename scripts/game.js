let replicants = []
let slugs = []
let splats = []
let splatsArr = []

let spritesheet
let spritedata
let animation = []

function preload() {
  spritedata = loadJSON("/assets/spritesheets/sprites.json")
  spritesheet = loadImage("/assets/spritesheets/sheet.png")
}

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
  let frames = spritedata.frames
  for (let i = 0; i < frames.length; i++) {
    let pos = frames[i].frame
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h)
    animation.push(img)
  }
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
  replicants.forEach(rep => rep.render())
  slugs.forEach(el => el.draw())
  slugs.forEach(el => el.update())

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

  // pos diff vector & repli move
  replicants.forEach(function(replic) {
    let dx = ghost.pos.x - replic.randPositionX
    let dy = ghost.pos.y - replic.randPositionY

    replic.randPositionX += dx / random(50, 100) // speed
    replic.randPositionY += dy / random(50, 100)
  })
}

// repli spawn
setInterval(() => {
  spawnReplicant()
}, SPAWN_INTERVAL)
