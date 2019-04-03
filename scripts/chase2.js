Enemy.prototype.update = function(playerX, playerY) {
  // Calculate direction towards player
  toPlayerX = playerX - this.x
  toPlayerY = playerY - this.y

  // Normalize
  toPlayerLength = Math.sqrt(toPlayerX * toPlayerX + toPlayerY * toPlayerY)
  toPlayerX = toPlayerX / toPlayerLength
  toPlayerY = toPlayerY / toPlayerLength

  // Move towards the player
  this.x += toPlayerX * this.speed
  this.y += toPlayerY * this.speed

  // Rotate us to face the player
  this.rotation = Math.atan2(toPlayerY, toPlayerX)
}
