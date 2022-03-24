const Mars = require('./variables');
const ObstacleDetectionError = require('./obstacleDetectionError');
class Rover {

  constructor(x, y, orientation) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move(movs) {
    let safetyPosition = {
      position: [this.x, this.y],
      orientation: this.orientation
    };
    try {
      movs.forEach(m => {
        switch (this.orientation) {
          case 'N':
            if (m === 'f') this.checkAndTry(this.x, this.y + 1);
            if (m === 'b') this.checkAndTry(this.x, this.y - 1);
            if (m === 'l') this.orientation = 'W'
            if (m === 'r') this.orientation = 'E'
            break;
          case 'S':
            if (m === 'f') this.checkAndTry(this.x, this.y - 1);
            if (m === 'b') this.checkAndTry(this.x, this.y + 1);
            if (m === 'l') this.orientation = 'E'
            if (m === 'r') this.orientation = 'W'
            break;
          case 'E':
            if (m === 'f') this.checkAndTry(this.x + 1, this.y);
            if (m === 'b') this.checkAndTry(this.x - 1, this.y);
            if (m === 'l') this.orientation = 'N'
            if (m === 'r') this.orientation = 'S'
            break;
          case 'W':
            if (m === 'f') this.checkAndTry(this.x - 1, this.y);
            if (m === 'b') this.checkAndTry(this.x + 1, this.y);
            if (m === 'l') this.orientation = 'S'
            if (m === 'r') this.orientation = 'N'
            break;
        
          default:
            break;
        }
      });
    } catch (error) {
      if (error instanceof ObstacleDetectionError) {
        //TO-DO (error.message)
      } else {
        //TO-DO
      }
      this.rollbackTrace(safetyPosition);
    }
  }

  checkAndTry(newX, newY) {
    newX = newX >= Mars.dimensions[0] ? 0 : newX;
    newX = newX < 0 ? Mars.dimensions[0] - 1 : newX;
    
    newY = newY >= Mars.dimensions[1] ? 0 : newY;
    newY = newY < 0 ? Mars.dimensions[1] - 1 : newY;

    if (this.isObstacle(newX, newY)) throw new
      ObstacleDetectionError(`Obstacle detected at [${newX},${newY}]`); 

    this.x = newX;
    this.y = newY;
  }

  rollbackTrace({position: [x, y], orientation: ori}) {
    this.x = x;
    this.y = y;
    this.orientation = ori;
  }

  isObstacle(x, y) {
    let isObstacle = false;
    Mars.obstacles.forEach((obs) => {
      if (obs[0] == x && obs[1] == y) isObstacle = true;
    });
    return isObstacle;
  }
}

module.exports = Rover