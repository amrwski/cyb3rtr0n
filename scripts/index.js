// class Game {
//   constructor() {}

//   setSpawnInterval() {
//     this.spawnIntervalTimer -= 100
//     if (this.spawnInterval) {
//       clearInterval(this.spawnInterval)
//     }

//     this.spawnInterval = setInterval(
//       function() {
//         this.obstacles.push(new Obstacle())
//       }.bind(this),
//       this.spawnIntervalTimer
//     )
//   }

//   setScoreInterval() {
//     this.scoreInterval = setInterval(
//       function() {
//         this.score++
//         document.querySelector("h1").innerHTML = `Score: ${this.score}`
//       }.bind(this),
//       1000
//     )
//   }

//   draw() {
//     clear()
//     background(0)
//     if (this.gameOver) {
//       textSize(50)
//       text("Game Over", 10, 30)
//     } else {
//       this.bird.draw()
//       this.obstacles.forEach(function(obstacle) {
//         obstacle.draw()
//       })
//     }
//   }

//   over() {
//     this.gameOver = true
//     clearInterval(this.scoreInterval)
//   }
// }
