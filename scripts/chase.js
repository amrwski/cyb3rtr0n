enemy.updatePosition = function() {
  if(enemy.isAttacking === false) {           
          var diffX = Math.floor(player.x - enemy.x);
          var diffY = Math.floor(player.y - enemy.y);

          //security distance by player --> superEnemy type 1 uses arrows
          var distance = getDistanceBetweenEntities(player, enemy);
          var gap = 20;


          enemy.pressingRight = diffX > gap;
          enemy.pressingLeft = diffX < -gap;
          enemy.pressingDown = diffY > gap;
          enemy.pressingUp = diffY < -gap;

          enemy.isStopped = false;


              if(enemy.speedX < 0)
                  enemy.speedX = - enemy.speedX;
              if(enemy.speedY < 0)
                  enemy.speedY = - enemy.speedY;
              //bumpers check if hitting a wall or end of map
              var rightBumper = {x:enemy.x + 15, y:enemy.y};
              var leftBumper = {x:enemy.x - 15, y:enemy.y};
              var upBumper = {x:enemy.x, y:enemy.y - 25};
              var downBumper = {x:enemy.x, y:enemy.y + 20};

              if(currentMap.isPositionWall(rightBumper)) {
                  enemy.x -= 1;
              } else {
                  if(enemy.pressingRight)
                      enemy.x += enemy.speedX;
              }
              if(currentMap.isPositionWall(leftBumper)) {
                  enemy.x += 1;
              } else {
                  if(enemy.pressingLeft)
                      enemy.x -= enemy.speedX;
              }

              if(currentMap.isPositionWall(downBumper)) {
                  enemy.y -= 1;
              } else {
                  if(enemy.pressingDown)
                      enemy.y += enemy.speedY;
              }
              if(currentMap.isPositionWall(upBumper)) {
                  enemy.y += 1;
              } else {
                  if(enemy.pressingUp)
                      enemy.y -= enemy.speedY;
              }

              //set position again if the center of the draw 
              //of enemy goes out of map's limits
              if(enemy.x  < enemy.width/2)
                  enemy.x  = enemy.width/2;
              if(enemy.x  > currentMap.width - enemy.width/2)
                  enemy.x  = currentMap.width - enemy.width/2;
              if(enemy.y < enemy.height/2)
                  enemy.y = enemy.height/2;
              if(enemy.y > currentMap.height - enemy.height/2)
                  enemy.y = currentMap.height - enemy.height/2;

      }
  }
}