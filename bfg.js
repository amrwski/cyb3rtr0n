function BFG(ghostPos, angle) {
  this.pos = createVector(ghostPos.x, ghostPos.y)
  this.vel = createVector() //////

  this.update = function() {
    this.pos.add(this.vel)
  }

  this.render = function() {
    push()
    stroke(255)
    strokeWeight(0.5)
    line(ghost.pos.x, ghost.pos.y, mouseX, mouseY)
    pop()
  }
}

function fire() {
  if (mouseIsPressed) {
    slugs.push(new BFG(ghost.pos, (mouseX, mouseY)))
  }
}

this.printXY = function() {
  if (mouseIsPressed) {
    console.log(mouseX, mouseY)
  }
}
