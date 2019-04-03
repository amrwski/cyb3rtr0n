let hit = false
function draw() {
  hit = collideCircleCircle(
    replicants.forEach(
      function(replic) {
        replic.randPositionX, replic.randPositionY, replic.width
      },
      slugs.forEach(function(slug) {
        slug.bullX, slug.bullY, 5
      })
    )
  )
  print("colliding? " + hit)
}

var hit = false
function draw() {
  background(255)
  ellipse(200, 200, 100, 100)
  ellipse(mouseX, mouseY, 150, 150)

  hit = collideCircleCircle(mouseX, mouseY, 150, 200, 200, 100)

  print("colliding? " + hit)
// }

// replicant
// fill(255, 69, 0)
// ellipse(this.randPositionX, this.randPositionY, this.width, this.height)

// bullet
// fill(200, 0, 200)
// ellipse(this.bullX, this.bullY, 5)

