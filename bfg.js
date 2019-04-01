function BFG() {
  this.pos = createVector()
  this.vel = createVector()

  this.update = function() {
    this.pos.add(this.vel)
  }

  this.render = function() {
    stroke(255)
    strokeWeight(3)
    PointerEvent(this.x, this.y)
  }
}

this.shooting = function() {
  if (mouseIsPressed) {
    console.log(mouseX, mouseY)
  }
}
