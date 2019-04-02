class BFG {
  constructor(mouseX, mouseY, ghostX, ghostY) {
    this.ghostX = ghostX
    this.ghostY = ghostY
    this.vel = createVector()
    this.pos = createVector(this.ghostX, this.ghostY)
    this.mouseX = mouseX
    this.mouseY = mouseY
  }
  draw() {
    push()
    stroke(255)
    strokeWeight(0.5)
    /* line(this.pos.x,this.pos.y,mouseX,mouseY) */
    line(this.mouseX, this.mouseY, this.pos.x, this.pos.y)
    pop()
  }
  update() {
    this.pos.add(this.vel)
    /* this.pos.x-=1 */
  }
}

function fire() {
  if (mouseIsPressed) {
    slugs.push(new BFG(mouseX, mouseY, ghost.pos.x, ghost.pos.y))
  }
}

this.printXY = function() {
  if (mouseIsPressed) {
    console.log(mouseX, mouseY)
  }
}

// function BFG(ghostPos, angle) {
//   this.pos = createVector(ghostPos.x, ghostPos.y)
//   this.vel = createVector() //////

//   this.update = function() {
//     this.pos.add(this.vel)
//   }

//   this.render = function() {
//     push()
//     stroke(255)
//     strokeWeight(0.5)
//     line(ghost.pos.x, ghost.pos.y, mouseX, mouseY)
//     pop()
//   }
// }

// function fire() {
//   if (mouseIsPressed) {
//     slugs.push(new BFG(ghost.pos, (mouseX, mouseY)))
//   }
// }

// this.printXY = function() {
//   if (mouseIsPressed) {
//     console.log(mouseX, mouseY)
//   }
// }
